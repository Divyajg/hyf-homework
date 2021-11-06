SET NAMES utf8mb4;
CREATE database meal_sharing;
USE meal_sharing;

CREATE TABLE meal (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
title VARCHAR(255) NOT NULL UNIQUE,
description TEXT NOT NULL,
location VARCHAR(255) NOT NULL,
when_date DATETIME NOT NULL,
max_reservations INT UNSIGNED NOT NULL,
price DECIMAL(5,2) NOT NULL,
created_date DATETIME NOT NULL DEFAULT NOW(),
PRIMARY KEY (id)
);

CREATE TABLE reservation (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
number_of_guests INT UNSIGNED NOT NULL,
meal_id INT UNSIGNED NOT NULL,
created_date DATETIME NOT NULL DEFAULT NOW(),
contact_phonenumber VARCHAR (255),
contact_name VARCHAR (255),
contact_email VARCHAR (255),
PRIMARY KEY (id),
FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE
);

CREATE TABLE review (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
meal_id INT UNSIGNED NOT NULL,
stars INT UNSIGNED NOT NULL,
created_date DATETIME NOT NULL DEFAULT NOW(),
PRIMARY KEY (id),
FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE
);


--MEALS. 
--Get all meals
SELECT * 
FROM meal;

--Add a new meal
INSERT INTO meal (
    title,
    description,
    location,
    when_date,
    max_reservations,
    price,
    created_date
  )
VALUES
  (
    "Lamb&veggies",
    "Indian cousine: Lamb curry with green peas, vegetable pulav, yogurt salad and yellow lentil sweet.",
    "Copenhagen SV",
    "2017-02-01",
    4,
    400,
    "2010-02-01"
  );

--Get a meal with any id, fx 1
SELECT * 
FROM meal
WHERE id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal 
SET max_reservations= 5
WHERE id = 1;

-- Delete a meal with any id, fx 1
DELETE FROM meal
WHERE id = 1;

-- RESERVATIONS. 
-- Get all reservations
SELECT *
FROM reservation;

-- Add a new reservation
INSERT INTO reservation (
    number_of_guests,
    meal_id,
    contact_phonenumber,
    contact_name,
    contact_email
) VALUES (
    4,
    2,
    31256528,
    "Betty Cooper",
    "betty@cooper.com"
);

--Get a reservation with any id, fx 1
SELECT *
FROM reservation
WHERE id = 4;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET number_of_guests = 2
WHERE id = 5;

-- Delete a reservation with any id, fx 1
DELETE FROM reservation
WHERE id = 4;

--REVIEW. 
--Get all the reviews
SELECT *
FROM review;

-- Add a new review
INSERT INTO review (
    title,  
    description,
    meal_id,
    stars,
    created_date
) VALUES (
    "5 stared meal!",
    "Amazing cousine and abience",
    2,
    5,
    "2021-10-14"
);

-- Get a review with any id, fx 1
SELECT *
FROM review
WHERE id = 1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET title = "5 stared meal! Highly recommend to try this out!", description = "Amazing cousine and abience. For friends, families and hangouts"
WHERE id = 2;

-- Delete a review with any id, fx 1
DELETE FROM review
WHERE id = 1;

-----------------------------------------------------------------
-- Now get meals that has a price smaller than a specific price fx 90
SELECT *
FROM meal
WHERE price < 400;

-- Get meals that still has available reservations

SELECT
  meal.id as Meal_id,
  meal.title as Meal_Title,
  meal.description as Meal_explained,
  meal.max_reservations as Maximum_reservations,
  SUM(reservation.number_of_guests) as Reserved_reservations,
  (meal.max_reservations - reservation.number_of_guests) AS Available_reservations
FROM meal, reservation
WHERE reservation.meal_id = meal.id
GROUP BY
  meal.id
ORDER BY
  meal.id ASC;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * 
FROM meal
WHERE title LIKE '%chicken%';

-- Get meals that has been created between two dates
SELECT *
FROM meal
WHERE (created_date BETWEEN '2010-02-01' AND '2010-02-01');

-- Get only specific number of meals fx return only 5 meals
SELECT *
FROM meal 
LIMIT 4;

-- Get the meals that have good reviews
SELECT *
FROM meal, review
WHERE stars >= 4 AND review.meal_id = meal.id;

-- Get reservations for a specific meal sorted by created_date
SELECT * 
FROM reservation
WHERE meal_id = 2
ORDER BY created_date DESC;

-- Sort all meals by average number of stars in the reviews
SELECT
  meal.title as Meals,
  meal.description as Description,
  AVG(review.stars) as Average_stars
FROM
  meal
  JOIN review ON meal.id = review.meal_id
GROUP BY
  meal.id
ORDER BY
  average_stars DESC;  