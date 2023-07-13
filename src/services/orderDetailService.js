import db from '../models/index';

const getAllOrderDetail = async (orderDetailId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let orderDetails = '';
      if ((orderDetailId === 'ALL')) {
        orderDetails = await db.OrderDetail.findAll();
      } else {
        orderDetails = await db.OrderDetail.findOne({
          where: { id: orderDetailId },
        });
      }
      resolve(orderDetails);
    } catch (e) {
      reject(e);
    }
  });
};

const getOrderDetailInOrder = async (inputId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let orderDetail = '';
      if (inputId) {
        orderDetail = await db.OrderDetail.findAll({
          where: { orderId: inputId },
        });
      }
      resolve(orderDetail);
    } catch (e) {
      reject(e);
    }
  });
};

const createNewOrderDetail = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      db.OrderDetail.create({
        orderId: data.orderId,
        productId: data.productId,
        num: data.num,
      });
      resolve({
        errCode: 0,
        errMessage: 'OK',
      });
    } catch (e) {
      reject(e);
    }
  });
};

const editOrderDetail = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 1,
          errMessage: 'Missing required parameter',
        });
      }
      let order = await db.OrderDetail.findOne({
        where: { id: data.id },
        raw: false,
      });

      if (order) {
        (order.orderId = data.orderId),
          (order.productId = data.productId),
          (order.num = data.num),
          await order.save();

        resolve({
          errCode: 0,
          errMessage: 'Update success!',
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: 'OrderDetail not found!',
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const deleteOrderDetail = (orderDetailId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let order = await db.OrderDetail.findOne({
        where: { id: orderDetailId },
      });
      if (!order) {
        resolve({
          errCode: 1,
          errMessage: 'The order is not exist',
        });
      } else {
        await db.OrderDetail.destroy({
          where: { id: orderDetailId },
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
  getAllOrderDetail,
  createNewOrderDetail,
  editOrderDetail,
  deleteOrderDetail,
  getOrderDetailInOrder,
};
