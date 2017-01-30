DROP DATABASE trainBot_db;
CREATE DATABASE trainBot_db;
USE trainBot_db;

SELECT * FROM Clients;
SELECT * FROM Users;
SELECT * FROM Programs;
SELECT * FROM WorkoutDays;

INSERT INTO Programs (name, days, description) 
VALUES ("crossfit", 30, "a 6 week, 5 days a week program for the intermediate athlete");
INSERT INTO Programs (name, days, description) 
VALUES ("powerlifting", 30, "a 10 week program for the novice lifter");
INSERT INTO Programs (name, days, description) 
VALUES ("rowing", 12, "a 4 week, 3 days a week program for the beginner rower");

INSERT INTO `WorkoutDays` (`id`,`day`,`text`,`ProgramId`) 
VALUES (DEFAULT,'4','aaaa4','2');

INSERT INTO `Users` (`username`, `password`, `email`, `name`) 
VALUES ('gUnit', '123', 'g@gmail.com', 'piggy');