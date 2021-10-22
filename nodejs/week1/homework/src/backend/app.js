const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

let mealsWithReviews;

function getMeals() {
    mealsWithReviews = meals.map((meal) => {
        meal.reviews = reviews.filter((review) => review.mealId === meal.id);
        return meal;
    });
    return mealsWithReviews;
}

function getCheapMeals() {
    const mealsWithLowPrice = meals.filter((meal) => meal.price <= 100);
    return mealsWithLowPrice;
}

function getLargeMeals() {
    const mealsWithMorePeople = meals.filter((meal) => {
        if (meal.maxNumberOfGuests >= 5) {
            return meal;
        }
    });
    return mealsWithMorePeople;
}

function getRandomMeal() {
    const randomNumber = Math.floor(Math.random() * meals.length);
    const randomMeal = meals[randomNumber];
    return randomMeal;
}

getReservations = () => reservations;

function getRandomReservation() {
    const randomNumber = Math.floor(Math.random() * reservations.length);
    const randomReservation = reservations[randomNumber];
    return randomReservation;
}

// this is where you will be adding your routes
app.get("/", async(request, response) => {
    response.statusCode = 200;
    response.send("Meal Sharing Web App");
});

app.get("/meals", async(request, response) => {
    response.statusCode = 200;
    response.json(getMeals());
});

app.get("/cheap-meals", async(request, response) => {
    response.statusCode = 200;
    response.json(getCheapMeals());
});

app.get("/large-meals", async(request, response) => {
    response.statusCode = 200;
    response.json(getLargeMeals());
});

app.get("/meal", async(request, response) => {
    response.statusCode = 200;
    response.json(getRandomMeal());
});

app.get("/reservations", async(request, response) => {
    response.statusCode = 200;
    response.json(getReservations());
});

app.get("/reservation", async(request, response) => {
    response.statusCode = 200;
    response.json(getRandomReservation());
});

module.exports = app;