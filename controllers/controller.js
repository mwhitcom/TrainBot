const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const User = require('../models/user.js')
const app = express();
const path = require("path");
const db = require("../models");

module.exports = (app) => {

    // landing page
    app.get('/', (request, response) => {
        response.render('landing')
    });



    // Form page for testing DB Entry
    app.get('/workout', (request, response) => {
        response.render('../views/test-db-entry');
    });

    // Form page to enter a new workout
    app.post('/workout/new', (request, response) => {
        console.log(request.body);
        db.WorkoutDay.create({
            day: request.body.day,
            text: request.body.text,
            ProgramId: request.body.program
        }).then((dbWorkOut) => {
            console.log(dbWorkOut);
        });
        response.redirect('/workout');
    });



    // page for update
    app.get('/workout/update', (request, response) => {
        db.User.findAll({   
        }).then((result) =>{
            var userObject = {
                user: result
            };
            console.log(userObject);
            response.render('test-update-program', userObject);
        });
    });
    // route for update
    app.put('/workout/update/:id', (request, response) => {
        console.log(request.body);
        db.User.update({
            ProgramId: request.body.program
        },{
            // purposefully put in the first user since handlebars is not up and running yet
            where: {id: request.params.id}
        }).then(() => {
            response.redirect('/workout/update');
        });  
    });




    // User Registration routes    
    app.post('/users/register', (request, response) => {
         db.User.find({where: {username: request.username}}).success((user) => {
                if(!user) {
                    db.User.create({
                        username: request.body.username, 
                        password: request.body.password, 
                        name: request.body.name, 
                        email: request.body.email
                    }).error((err) => {
                        console.log(err);
                    });
                } else {
                    response.redirect('/register')
                }
            })
            response.redirect('/')
    });
    
    app.post('/users/login',
          passport.authenticate('local', {
                successRedirect: '/profile',
                failureRedirect: '/register',
                failureFlash: true
            }),
        (request, response) => {
            response.redirect('/')
   });

    app.get('/logout', (request, response) => {
        request.logout();
        request.flash('You are logged out');
        requst.redirect('/login');
    })
};