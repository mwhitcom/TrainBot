const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes)=> {
  var User = sequelize.define("User", {
    username:{type: DataTypes.STRING , unique: true, validate:{notNull: true, notEmpty: true}},
    password:{type: DataTypes.STRING , validate:{notNull: true, notEmpty: true}},
    email:{type: DataTypes.STRING , validate:{notNull: true, notEmpty: true}},
    name:{type: DataTypes.STRING , validate:{notNull: true, notEmpty: true}}
 },
 {
   classMethods:{
     validatePassword: (password, passwd, done, user) => {
       bcrypt.compare(password, psswd, (err, isMatch) => {
         if(err) console.log(err);
         if(isMatch){
           return done(null, user)
         }else{
           return done(null, false);
         }
       });
     },
      associate: function(models){
        User.belongsTo(models.Program);
      }
   },
   timestamps: false
 }
 


);
  User.hook('beforeCreate', (user, fn) => {
    let salt = bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      return salt
    });
    bcrypt.hash(user.passwd, salt , null, (err, hash) => {
      if(err) return next(err);
      user.password = hash;
      return fn(null, user);
    })
  })
  return User;
};
