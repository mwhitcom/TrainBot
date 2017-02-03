const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes)=> {
  var User = sequelize.define("User", {
    username:{type: DataTypes.STRING },
    password:{type: DataTypes.STRING },
    email:{type: DataTypes.STRING },
    name:{type: DataTypes.STRING },
    salt:{type: DataTypes.STRING},
 },{
   timestamps: false
 });
  return User;
};
