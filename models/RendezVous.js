
module.exports = (sequelize, DataTypes) => {
    const RendezVous = sequelize.define('RendezVous', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        Date: { type: DataTypes.DATE, allowNull: false },
        Temp: { type: DataTypes.DATE, allowNull: false },
        Description: { type: DataTypes.STRING},
    });

        RendezVous.associate = models => {
            RendezVous.belongsTo(models.Patient, {
                foreignKey: {
                    allowNull: false
                }
            });
       
        }

    return RendezVous;
}