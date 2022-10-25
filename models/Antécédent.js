
module.exports = (sequelize, DataTypes) => {
    const  Antécédent = sequelize.define('Antécédent', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },       
        Type: { type: DataTypes.STRING, allowNull: false },

    });

        Antécédent.associate = models => {
            Antécédent.belongsTo(models.Phatologie, {
                foreignKey: {
                    allowNull: false
                }
            });
       
        }

    return  Antécédent;
}