#1. Find out how many tasks are in the task table
SELECT COUNT(*) AS Total_tasks FROM task;

#2. Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(*) FROM task WHERE due_date IS NULL;

#3. Find all the tasks that are marked as done
SELECT task.id, task.title, status.name AS Task_Done FROM task, status WHERE status.name LIKE "%Done%" AND task.status_id=status.id;

#4. Find all the tasks that are not marked as done
SELECT task.id, task.title, status.name AS Not_Done FROM task, status WHERE status.name NOT LIKE "%Done%" AND task.status_id=status.id;

#5. Get all the tasks, sorted with the most recently created first
SELECT id, title, description, created FROM task ORDER BY created DESC;

#6. Get the single most recently created task
SELECT id, title, description, created AS Latest_created FROM task ORDER BY created DESC LIMIT 1;

#7. Get the title and due date of all tasks WHERE the title or description contains database
SELECT title, due_date FROM task WHERE title LIKE "%database%" OR description LIKE "%database%";

#8. Get the title and status (as text) of all tasks
SELECT task.title, status.name AS Status FROM task, status WHERE task.status_id=status.id;

#9. Get the name of each status, along with a count of how many tasks have that status
select  status.name, count(status.name) as Total_tasks FROM task, status WHERE task.status_id = status.id GROUP BY status.name;

#10. Get the names of all statuses, sorted by the status with most tasks first
SELECT  status.name, count(status.name) as Total_tasks FROM task, status WHERE task.status_id = status.id GROUP BY status.name 
ORDER BY COUNT(status.name) DESC;

