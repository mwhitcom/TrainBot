const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./models');


// Serialize Sessions
passport.serializeUser((user, done) => {
	done(null, user);
});

//Deserialize Sessions
passport.deserializeUser((user, done) => {
	db.User.find({where: {id: user.id}}).success((user) => {
		done(null, user);
	}).error((err) => {
		done(err, null)
	});
});

// For Authentication Purposes
passport.use(new LocalStrategy(
	(username, password, done) => {
		db.User.find({where: {username: username}}).success( (user) => {
			passwd = user ? user.password : ''
			isMatch = db.User.validPassword(password, passwd, done, user)
		});
	}
));