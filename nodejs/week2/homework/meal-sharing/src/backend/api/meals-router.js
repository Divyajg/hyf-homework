const express = require("express");
const { parse } = require("superagent");
const router = express.Router();

const meals = require("../data/meals.json");

router.get("/", async(request, response) => {
    try {
        let { maxPrice, queryTitle, createdAfter, limit } = request.query;

        //maxPrice
        if (maxPrice) {
            console.log(maxPrice);

            if (parseInt(maxPrice) > 0) {
                const mealsWithMaxprice = meals.filter(meal => meal.price < parseInt(maxPrice));
                response.json(mealsWithMaxprice);
            } else {
                response.statusCode = 400;
                response.send("Oops! wrong query!");
            }

            //searchTitle
        } else if (queryTitle) {
            console.log(queryTitle);
            console.log(encodeURI(queryTitle));
            if (encodeURI(queryTitle)) {
                const mealsWithTitle = meals.filter(meal => encodeURI(meal.title).toLowerCase().includes(encodeURI(queryTitle)));
                response.json(mealsWithTitle);
            } else {
                response.statusCode = 400;
                response.send("Oops! wrong query!");
            }

            //createdAfter
        } else if (createdAfter) {
            console.log(createdAfter);
            if (Date.parse(createdAfter)) {
                const mealsCreatedAfter = meals.filter(meal => Date.parse(meal.createdAt) > Date.parse(createdAfter));
                response.json(mealsCreatedAfter);
            } else {
                response.statusCode = 400;
                response.send("Oops! wrong query!");
            }

            //limit
        } else if (limit) {
            console.log(limit);
            if (parseInt(limit) <= meals.length) {
                const expectedNumberOfMeals = meals.slice(0, parseInt(limit));
                response.json(expectedNumberOfMeals);
            } else if (parseInt(limit) > meals.length) {
                response.send("Number of meals are fewer than given limit!")
            } else {
                response.statusCode = 400;
                response.send("Oops! wrong query!");
            }
            //meals
        } else {

            console.log("in /api/meals");
            response.json(meals);
        }
    } catch (error) {
        throw error;
    }
});

router.get('/:id', async(request, response) => {
    try {
        let id = parseInt(request.params.id, 10);
        console.log(id);
        const mealWithId = meals.find(meal => meal.id === id);
        const mealWithoutId = {};
        if (mealWithId) {

            response.json(mealWithId);
        } else if (id > meals.length) {

            response.json(mealWithoutId);
        } else {
            response.statusCode = 400;
            response.json({});
        }
    } catch (error) {
        throw error;
    }
});

module.exports = router;