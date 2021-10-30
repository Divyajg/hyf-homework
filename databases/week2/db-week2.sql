--Part-1:
#1. Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) VALUES("Lesson2", "CRUD, Primary key and Foreign key", "2017-10-25 06:54:16", "2019-01-28 15:27:30", "2019-09-20 10:20:09", 2, 1);

#1. Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) VALUES("Lesson2.1", "Primary key ", "2017-10-25 06:54:16", "2019-01-28 15:27:30", "2019-09-20 10:20:09", 3, 3);

#1. Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) VALUES("Lesson2.2", "Foreign key", "2017-10-25 06:54:16", "2019-01-28 15:27:30", "2019-09-20 10:20:09", 1, 5);

#2. Change the title of a task:
UPDATE task SET title="modified title" where id=39;

#3. Change a task due date
UPDATE task SET due_date="2020-10-20 10:20:09" where id=40;

#4.Change a task status
UPDATE task SET status_id=2 where id=41;

#5. Mark a task as complete
UPDATE task SET status_id=3 where id=39;

#2. Delete a task
DELETE FROM task where id=40;

--Part-2: Creating School Database:
# Class table: with the columns: id, name, begins (date), ends (date):
CREATE TABLE  class(
id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT, 
name VARCHAR(255) NOT NULL,
begins DATETIME NOT NULL,
ends DATETIME NOT NULL,
PRIMARY KEY(id));

# Student table: with the columns: id, name, email, phone, class_id (foreign key)
CREATE Table student(
id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
email VARCHAR(255),
phone INT(8),
class_id int(10) UNSIGNED NOT NULL,
PRIMARY KEY (id), 
CONSTRAINT FK_class
FOREIGN KEY (class_id) REFERENCES class(id));

# Create an index on the name column of the student table.
CREATE INDEX student_name ON student(name);

# Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class ADD status ENUM ("not-started", "ongoing", "finished");

--Part-3:
--Get all the tasks assigned to users whose email ends in @spotify.com
#Tasks of users with email ends in @spotify.com
SELECT user.id as user_id,  task.title as task, user.email as "email_@spotify.com"
FROM user, user_task, task WHERE 
user.email LIKE "%@spotify.com" AND
user_task.task_id=task.id AND 
user.id=user_task.user_id;

--Get all the tasks for 'Donald Duck' with status 'Not started'
# Tasks for 'Donald Duck' with status 'Not started'
SELECT task.title as Task, task.description as Description, status.name as Status 
FROM user, user_task, task, status WHERE
user.name LIKE "Donald Duck" AND
status.name LIKE "Not started" AND
task.status_id=status.id AND
user.id=user_task.user_id AND
user_task.task_id=task.id;

--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
#tasks for 'Maryrose Meadows' that were created in september
SELECT * FROM user_task
JOIN task ON task_id=task.id
JOIN user ON user_id=user.id
WHERE user.name='Maryrose Meadows' AND month(task.created) = 09;

--Find how many tasks created in each month:
# Tasks created in each month:
SELECT monthname(created) as month, COUNT(*) as tasksCreated
FROM task GROUP BY monthname(created);