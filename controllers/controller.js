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
        db.Program.findAll({
        }).then((result) =>{
            var progObject = {
                programs: result
            };
            console.log(progObject);
            response.render('landing', progObject);
        });
    });

// Admin page
    app.get('/admin', (request, response) =>{
        response.render('adminPanel');
    })

// Client List
    app.get('/user', (request, response) => {
        db.User.findAll({
            attributes: ['name', 'username', 'email'],
            include: {
                model: db.Program,
                attributes: ['name', 'description']
            }
        }).then((result) =>{
            var clientList = {
                clients: result
            };
            response.render('../views/clientList', clientList);
        });
    });

// Form page for NEW WORKOUT
    app.get('/workout', (request, response) => {
        db.Program.findAll({
        }).then((result) =>{
            var progList = {
                programs: result
            };
            response.render('../views/new_workout', progList);
        });
    });
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

// Form Page to UPDATE WORKOUT
    app.get('/workout/update', (request, response) =>{
        response.render('update');
    });



// List of all programs
    app.get('/admin/programs', (request, response) => {
        db.Program.findAll({
        }).then((result) =>{
            var progObject = {
                programs: result
            };
            console.log(progObject);
            response.render('programs', progObject);
        });
    });

    app.post('/program', (request, response) =>{
        db.Program.create({
            name: request.body.name,
            days: request.body.days,
            description: request.body.description
        }).then((dbProgram)=>{
            response.json(dbProgram);
        });
    });


// List of workouts for individual program
    app.get('/program/:id', (request, response) => {
        db.Program.findOne({
            where: {
                id: request.params.id
            },
            attributes: ['id', 'name'],
            include: {
                model: db.WorkoutDay,
                attributes: ['day', 'text']    
            }
        }).then((results) =>{
            console.log("\n\n"+ results +"\n\n")
            var progDetails = {
                details: results
            };
            console.log(progDetails);
            response.render('../views/details', progDetails)
        })
    });


// Form page for Client Program UPDATE
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
    app.put('/workout/update/:id', (request, response) => {
        console.log(request.body);
        db.User.update({
            ProgramId: request.body.program
        },{
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