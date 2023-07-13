import orderDetailService from '../services/orderDetailService';

const getAllOrderDetail = async (req, res) => {
  let orderDetails = await orderDetailService.getAllOrderDetail(req.body.id);
  return res.status(200).json({
    errCode: 0,
    errMessage: 'Ok',
    orderDetails,
  });
};

const getOrderDetailInOrder = async (req, res) => {
  let id = req.query.orderId;
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: 'Missing required parameters',
      orderDetailInOrder: [],
    });
  }
  let orderDetailInOrder = await orderDetailService.getOrderDetailInOrder(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: 'Ok',
    orderDetailInOrder,
  });
};

const handleCreateOrderDetail = async (req, res) => {
  let message = await orderDetailService.createNewOrderDetail(req.body);
  return res.status(200).json(message);
};

const handleEditOrderDetail = async (req, res) => {
  let message = await orderDetailService.editOrderDetail(req.body);
  return res.status(200).json(message);
};

const handleDeleteOrderDetail = async (req, res) => {
  let message = await orderDetailService.deleteOrderDetail(req.body.id);
  return res.status(200).json(message);
};

module.exports = {
  getAllOrderDetail,
  getOrderDetailInOrder,
  handleCreateOrderDetail,
  handleEditOrderDetail,
  handleDeleteOrderDetail,
};
