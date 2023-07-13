'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    categoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    discount: DataTypes.FLOAT,
    thumbnail: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN,
    valueEn: DataTypes.STRING,
    valueVi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};