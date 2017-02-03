DROP DATABASE trainBot_db;
CREATE DATABASE trainBot_db;
USE trainBot_db;

SELECT * FROM Users;
SELECT * FROM Programs;
SELECT * FROM WorkoutDays;

INSERT INTO Programs (name, days, description) 
VALUES ("Crossfit", 30, "A 6 week, 5 days a week program for the intermediate athlete");
INSERT INTO Programs (name, days, description) 
VALUES ("Powerlifting", 30, "A 10 week program for the novice lifter");
INSERT INTO Programs (name, days, description) 
VALUES ("Rowing", 12, "A 4 week, 3 days a week program for the beginner rower");

INSERT INTO `WorkoutDays` (`id`,`day`,`text`,`ProgramId`) 
VALUES (DEFAULT,'4','aaaa4','2');
INSERT INTO `WorkoutDays` (`id`,`day`,`text`,`ProgramId`) 
VALUES (DEFAULT,'1','bbbb5','2');
INSERT INTO `WorkoutDays` (`id`,`day`,`text`,`ProgramId`) 
VALUES (DEFAULT,'2','cccc5','2');

INSERT INTO `WorkoutDays` (`id`,`day`,`text`,`ProgramId`) 
VALUES (DEFAULT,'1','abab1','1');
INSERT INTO `WorkoutDays` (`id`,`day`,`text`,`ProgramId`) 
VALUES (DEFAULT,'2','abab22','1');
INSERT INTO `WorkoutDays` (`id`,`day`,`text`,`ProgramId`) 
VALUES (DEFAULT,'3','abab333','1');

INSERT INTO `WorkoutDays` (`id`,`day`,`text`,`ProgramId`) 
VALUES (DEFAULT,'1','4nnn','3');
INSERT INTO `WorkoutDays` (`id`,`day`,`text`,`ProgramId`) 
VALUES (DEFAULT,'2','44nn','3');
INSERT INTO `WorkoutDays` (`id`,`day`,`text`,`ProgramId`) 
VALUES (DEFAULT,'3','444n','3');

INSERT INTO `Users` (`username`, `password`, `email`, `name`) 
VALUES ('gUnit', '123', 'g@gmail.com', 'piggy');
INSERT INTO `Users` (`username`, `password`, `email`, `name`) 
VALUES ('rhouse', '12345', 'r@gmail.com', 'ryan');
INSERT INTO `Users` (`username`, `password`, `email`, `name`) 
VALUES ('mWhit', '1234567', 'm@gmail.com', 'matt');