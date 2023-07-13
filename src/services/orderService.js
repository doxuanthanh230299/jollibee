import db from '../models/index';
const { Op } = require('sequelize');

const getAllOrder = async (orderId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let orders = '';
      if ((orderId = 'ALL')) {
        orders = await db.Order.findAll();
      } else {
        orders = await db.Order.findOne({
          where: { id: orderId },
        });
      }
      resolve(orders);
    } catch (e) {
      reject(e);
    }
  });
};

const getOrderDataByMonth = async (month) => {
  return new Promise(async (resolve, reject) => {
    try {
      let orderDataByMonth = db.Order.findAll({
        where: {
          createdAt: {
            [Op.between]: [`2023-${month}-01 00:00:00`, `2023-${month}-31 23:59:59`],
          },
        },
      });
      resolve(orderDataByMonth);
    } catch (e) {
      reject(e);
    }
  });
};

const getOrder = async (inputId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let order = '';
      if (inputId) {
        order = await db.Order.findOne({
          where: { id: inputId },
        });
      }
      resolve(order);
    } catch (e) {
      reject(e);
    }
  });
};

const createNewOrder = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let order = {};
      order = await db.Order.create({
        fullName: data.fullName,
        userId: data.userId,
        phoneNumber: data.phoneNumber,
        address: data.address,
        note: data.note,
        orderStatus: data.orderStatus,
        total: data.total,
        orderDate: data.orderDate,
        deleted: data.deleted,
        valueEn: data.valueEn,
        valueVi: data.valueVi,
      });
      resolve({
        order,
        errCode: 0,
        errMessage: 'OK',
      });
    } catch (e) {
      reject(e);
    }
  });
};

const editOrder = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 1,
          errMessage: 'Missing required parameter',
        });
      }
      let order = await db.Order.findOne({
        where: { id: data.id },
        raw: false,
      });

      if (order) {
        (order.fullName = data.fullName),
          (order.userId = data.userId),
          (order.phoneNumber = data.phoneNumber),
          (order.address = data.address),
          (order.note = data.note),
          (order.orderStatus = data.orderStatus),
          (order.deleted = data.deleted),
          await order.save();

        resolve({
          errCode: 0,
          errMessage: 'Update success!',
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: 'Order not found!',
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const deleteOrder = (orderId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let order = await db.Order.findOne({
        where: { id: orderId },
      });
      if (!order) {
        resolve({
          errCode: 1,
          errMessage: 'The order is not exist',
        });
      } else {
        await db.Order.destroy({
          where: { id: orderId },
        });
        resolve({
          errCode: 0,
          errMessage: 'The order was deleted!',
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getAllOrder,
  getOrder,
  createNewOrder,
  editOrder,
  deleteOrder,
  getOrderDataByMonth,
};
