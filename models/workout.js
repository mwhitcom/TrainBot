module.exports = (sequelize, DataTypes)=>{
    var WorkoutDay = sequelize.define("WorkoutDay",{
        day:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { not: ["[a-z]", "i"] }
            },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
            }
        },{
            classMethods: {
            associate: function(models){
                WorkoutDay.belongsTo(models.Program);
            }
        },
        timestamps: false
    });
    return WorkoutDay;
};