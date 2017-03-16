# [TrainBot](https://rhouse-train-bot.herokuapp.com/) - UCLA Coding Bootcamp Project 2

TrainBot was created by Andrey Orlov, Matt Whitcomb, and Ryan House as their second project for the UCLA Coding Bootcamp.


## Objective 

TrainBot is a website template to help personal trainers created websites for their business. Websites like Wordpress offer solutions to easily creating such websites, but don't contain the ability to help personal trainers keep track of their clients, dynamically update their programs, and ability to quickly cater a program to a user. 


## Project Requirements

The project requirements listed below were provided by the project markdown:

* Must use a Node and Express Web Server
* Must be backed by a MySQL Database with a Sequelize ORM  
* Must have both GET and POST routes for retrieving and adding new data
* Must incorporate Basic SEO Strategies 
* Must incorporate Basic Testing Framework 
* Must be deployed using Heroku (with Data)
* Must utilize at least one new library, package, or technology that we haven’t discussed
* Must have a polished frontend / UI 
* Must have folder structure that meets MVC Paradigm
* Must meet good quality coding standards (indentation, scoping, naming)
* Utilize Handlebars for Server-Side Templating
* Incorporate Authentication (JSON Web Tokens, Sessions, Etc.)
* Use an existing public dataset to power the database
* Create a migration strategy for sharing data across teammembers.


## MVP

Landing page with personal trainer bio
User and admin logins - User can sign up for specific program upon login
Admin views:
* Landing page with current client list and their progress through Programs
* Program creation page - Create Program with daily workouts
User views:
* Dashboard - ability to change login info, view progress in current program
* Daily Workout - page displaying the current daily workouts


## Technologies Used

JavaScript
jQuery
Passport.js
Handlebars.js
Node.js
Express.js
Sequelize
MySQL
HTML5
CSS3


## Approach Taken

We pinpointed an issue that a lot of freelance personal trainers experience: tough to keep up with communication with clients and really get a gauge of how they are doing with the program. The current solution consists of a lot of emails and excel sheets. We aimed to build a personal website template combined with a training hub where personal trainers could keep track of their client's progress and also store their various workout programs for clients to view.

Once we got past this point we started a Trello board to keep track of tasks and then seperated the project into 3 main areas: UI/UX, data storage, and Authentication (using Passport.js). Each us us picked a section and took charge of that code, and then all worked together on merging it together into a coehsive, efficient web app.

## Roadblocks

The largest roadblock was the implementation of authentication, but in the end we were able to get it working smoothly.

## Future Implementations

* Re-build the front-end using React.js
* Implement a pay system for users signing up to use the personal trainer's custom programs.
* Add a scheduling component so users can schedule time with the personal trainer.
* Build out a comments section so clients can leave feedback for the personal trainer on each individual workout.