'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      fullName: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      note: {
        type: Sequelize.STRING,
      },
      orderStatus: {
        type: Sequelize.INTEGER,
      },
      total: {
        type: Sequelize.FLOAT,
      },
      orderDate: {
        type: Sequelize.DATE,
      },
      deleted: {
        type: Sequelize.BOOLEAN,
      },
      valueEn: {
        type: Sequelize.STRING,
      },
      valueVi: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  },
};
