'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: DataTypes.INTEGER,
      fullName: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      address: DataTypes.STRING,
      note: DataTypes.STRING,
      orderStatus: DataTypes.INTEGER,
      total: DataTypes.FLOAT,
      orderDate: DataTypes.DATE,
      deleted: DataTypes.BOOLEAN,
      valueEn: DataTypes.STRING,
      valueVi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
