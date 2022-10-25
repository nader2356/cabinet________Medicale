
module.exports = (sequelize, DataTypes) => {
    const  Phatologie = sequelize.define('Phatologie', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Phatologie: { type: DataTypes.STRING, allowNull: false },
        Traitement: { type: DataTypes.STRING, allowNull: false },
        Du: { type: DataTypes.DATE },
        Au: { type: DataTypes.DATE},
    });

       
        

    return  Phatologie;
}