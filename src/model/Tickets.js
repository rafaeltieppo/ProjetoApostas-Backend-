const { Model, DataTypes } = require('sequelize');

class Ticket extends Model {
    static init(datacon) {
        super.init(
            {
                saldo: {
                    type: DataTypes.DECIMAL(5, 2),
                    allowNull: false
                }
            },

            {
                sequelize: datacon,
                tableName: 'tickets',
                modelName: 'ticket'
            }
        );
    }

    static associate(models) {
        Ticket.belongTo(models.aposta, {  })
    }
}

module.exports = Ticket;