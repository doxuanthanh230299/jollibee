import orderService from '../services/orderService';

const getAllOrder = async (req, res) => {
  let orders = await orderService.getAllOrder(req.body.id);
  return res.status(200).json({
    errCode: 0,
    errMessage: 'Ok',
    orders,
  });
};

const getOrderDataByMonth = async (req, res) => {
let orders = await orderService.getOrderDataByMonth(req.query.id);
  return res.status(200).json({
    errCode: 0,
    errMessage: 'Success',
    orders,
  });
};

const handleCreateOrder = async (req, res) => {
  let message = await orderService.createNewOrder(req.body);
  return res.status(200).json(message);
};

const handleEditOrder = async (req, res) => {
  let message = await orderService.editOrder(req.body);
  return res.status(200).json(message);
};

const handleDeleteOrder = async (req, res) => {
  let message = await orderService.deleteOrder(req.body.id);
  return res.status(200).json(message);
};

module.exports = {
  getAllOrder,
  handleCreateOrder,
  handleEditOrder,
  handleDeleteOrder,
  getOrderDataByMonth,
};
