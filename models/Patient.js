module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define('Patient', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nom: { type: DataTypes.STRING, allowNull: false },
        Prenom: { type: DataTypes.STRING, allowNull: false },
        Sexe: { type: DataTypes.STRING, allowNull: false },
        Age: { type: DataTypes.STRING, allowNull: false },
        Mobile: { type: DataTypes.STRING, allowNull: false },
        DateDenaissance: { type: DataTypes.DATE, allowNull: false },
        Adresse: { type: DataTypes.STRING,  allowNull: false },
        avatar: { type: DataTypes.STRING },
       
    });

   
    
    return Patient;
}