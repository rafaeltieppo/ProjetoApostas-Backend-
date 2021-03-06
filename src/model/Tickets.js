const { Model, DataTypes } = require('sequelize');

class Ticket extends Model {
    static init(datacon) {
        super.init(
            {
                id_cliente: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'clientes',
                        key: 'id'
                    }
                },
                id_aposta: {
                    type: DataTypes.INTEGER,
                    allowNull: false,  
                    references: {
                        model: 'apostas',
                        key: 'id'
                    }
                },
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
        Ticket.belongsTo(models.aposta, { foreignKey: 'id' });
        Ticket.belongsTo(models.cliente, { foreignKey: 'id' });
    }
}

module.exports = Ticket; 