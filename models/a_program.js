module.exports = (sequelize, DataTypes) => {
    var Program = sequelize.define('Program', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        days: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                not: ["[a-z]",'i']
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },{
        classMethods: {
            associate: function(models){
                Program.hasMany(models.User),
                Program.hasMany(models.WorkoutDay)
            }
        },
        timestamps: false
    });
    return Program;
};