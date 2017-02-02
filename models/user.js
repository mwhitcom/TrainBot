const bcrypt = require('bcryptjs');


module.exports = (sequelize, DataTypes)=> {
  var User = sequelize.define("User",
        {
          name:{type: DataTypes.STRING },
          username:{type: DataTypes.STRING },
          password:{type: DataTypes.STRING },
          salt:{type: DataTypes.STRING},
          email:{type: DataTypes.STRING },
        
      }
    );
    
  return User;
};
