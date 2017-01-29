const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.js')
const app = express();

module.exports = (app) => {

    // landing page
    app.get('/', (request, response) => {
        response.render('landing')
    });
    
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