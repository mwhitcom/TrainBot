module.exports = (sequelize, DataTypes) => {
    var Client = sequelize.define('Client', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len[1]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len[1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        phoneNumber: {
            type: DataTypes.INTGER
            allowNull: false,
            validate: {
                not: ["[a-z]", "i"]
            }
        }

    });
    return Client;
};