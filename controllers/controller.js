const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.js')
const app = express();
const db = require("../models");
const bcrypt = require('bcryptjs');

module.exports = (app) => {

    // landing page
    app.get('/', (request, response) => {
        response.render('landing')
    });
    
    app.post('/users/register', (request, response) => {
         let name = request.body.username; 
         let username = request.body.username;
         let email = request.body.email;
         let password = request.body.password;
         let password2 = request.body.password2;
         
          request.checkBody('name', 'Name is required').notEmpty();
          request.checkBody('email', 'Email is required').notEmpty();
          request.checkBody('email', 'Email is not valid').isEmail();
          request.checkBody('username', 'username is required').notEmpty()
          request.checkBody('password', 'Password is required').notEmpty()
          request.checkBody('password2', 'Passwords do not match').equals(request.body.password);
             
              let errors = request.validationErrors();
              if(errors){
                  response.redirect('/', {errors: errors});
              } else {
                
                 let salt = bcrypt.genSaltSync(10)
                 let hashedPassword = bcrypt.hashSync(password, salt) 
                 db.User.create({
                     name: name,
                     username: username,
                     password: hashedPassword,
                     salt: salt,
                     email: email
                 }).then(
                    ()=>{
                        console.log("User Registered")
                        response.redirect('/');
                    }
             )}
     })



      passport.use('local', new LocalStrategy(
        (username, password, done) => {
        db.User.findOne({ where: { 'username': username }}).then((user) => {
            
            let hashedPW = bcrypt.hashSync(password, user.salt) 
            console.log(hashedPW , user.password);
            if(user.password === hashedPW){
              return console.log("YES!"), done(user);
            }
            return done(null, false , console.log('incorrect password'))
          })
        }
      ));


      
        // Serialize Sessions
      passport.serializeUser((user, done) => {
        done(user.username);
      });

      //Deserialize Sessions
      passport.deserializeUser((user, done) => {
        db.User.findOne({where: {'username': username}}).then( (user) => {
          done(user);
        }).catch((err) => {
          done(err, null)
        });
      });



        app.post('/users/login', passport.authenticate('local',{
            failureRedirect: '/login',
            successRediderct: '/user'
        }));




};