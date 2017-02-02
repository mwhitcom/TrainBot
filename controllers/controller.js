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

// User page
    app.get('/user/workout', (request, response) =>{
        db.WorkoutDay.findOne({
            where: {
                day: 2, // SessionStorageUserCurrentDay
                ProgramId: 1 // SessionStorageUserProgramId
            }
        }).then((results) =>{
            var workoutObject = {
                singleWorkout: results
            };
            console.log(results);
            console.log(workoutObject);
            response.render('user-workout');
        });
    });

    app.get('/user/profile', (request, response) =>{
        response.render('user-profile');
    })

// Client List
    app.get('/admin/clients', (request, response) => {
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
            response.render('clientList', clientList);
        });
    });

// Create Program page

    app.get('/admin/create', (request, response) => {
        response.render('admin-create');
    });

// Form page for NEW WORKOUT
    app.get('/admin/workout', (request, response) => {
        db.Program.findAll({
        }).then((result) =>{
            var progList = {
                programs: result
            };
            response.render('newWorkout', progList);
        });
    });
    
    app.post('/admin/workout/new', (request, response) => {
        console.log(request.body);
        db.WorkoutDay.create({
            day: request.body.day,
            text: request.body.text,
            ProgramId: request.body.program
        }).then((dbWorkOut) => {
            console.log(dbWorkOut);
        });
        response.redirect('/admin/workout');
    });

// Form Page to UPDATE WORKOUT
    app.get('/admin/workout/update', (request, response) =>{
        response.render('admin/workout/update');
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

    app.post('admin/programs', (request, response) =>{
        db.Program.create({
            name: request.body.name,
            days: request.body.days,
            description: request.body.description
        }).then((dbProgram)=>{
            response.json(dbProgram);
        });
    });


// List of workouts for individual program
    // app.get('/admin/programs/:id', (request, response) => {
    //     db.Program.findOne({
    //         where: {
    //             id: request.params.id
    //         },
    //         attributes: ['id', 'name'],
    //         include: {
    //             model: db.WorkoutDay,
    //             attributes: ['day', 'text']    
    //         }
    //     }).then((results) =>{
    //         var progDetails = {
    //             details: results
    //         };
    //         console.log(progDetails);
    //         response.render('details', progDetails)
    //     })
    // });

app.get('/admin/programs/:id', (request, response) => {
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
 
            response.json(results);
        })
    });

// Form page for Client Program UPDATE
    app.get('/admin/clients/update', (request, response) => {
        db.User.findAll({   
        }).then((result) =>{
            var userObject = {
                user: result
            };
            console.log(userObject);
            response.render('clientUpdate', userObject);
        });
    });
    app.put('/admin/clients/update:id', (request, response) => {
        console.log(request.body);
        db.User.update({
            ProgramId: request.body.program
        },{
            where: {id: request.params.id}
        }).then(() => {
            response.redirect('/admin/clients/update');
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