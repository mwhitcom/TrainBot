module.exports = (sequelize, DataTypes) => {
    var Client = sequelize.define('Client', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    },{
        classMethods: {
            associate: function(models){
                Client.belongsTo(models.Program,
                {
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return Client;
};