module.exports = (sequelize, DataTypes)=> {
  var client_profile = sequelize.define("client_profile", {
    client_name: DataTypes.STRING,
    client_user_name: DataTypes.STRING,
    client_password: DataTypes.STRING,
  });
  return client_profile;
};
