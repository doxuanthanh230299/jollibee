import express from 'express';
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';
import categoryController from '../controllers/categoryController';
import productController from '../controllers/productController';
import orderController from '../controllers/orderController';
import orderDetailController from '../controllers/orderDetailController';
import blogController from '../controllers/blogController';
import authController from '../controllers/authController';

let router = express.Router();

let initWebRoutes = (app) => {
  router.get('/', homeController.getHomePage);

  router.get('/crud', homeController.CRUD);
  router.post('/post-crud', homeController.postCRUD);
  router.get('/get-crud', homeController.getCRUD);
  router.get('/edit-crud', homeController.getEditCRUD);
  router.post('/put-crud', homeController.putCRUD);
  router.get('/delete-crud', homeController.deleteCRUD);

  // Check login
  router.get('/api/auth', authController.checkLogin);

  // User
  router.post('/api/login', userController.handleLogin);
  router.get('/api/get-all-users', userController.getAllUsers);
  router.post('/api/create-new-user', userController.upload, userController.handleCreateNewUser);
  router.put('/api/edit-user', userController.handleEditUser);
  router.delete('/api/delete-user', userController.handleDeleteUser);

  // Category
  router.get('/api/get-all-category', categoryController.getAllCategory);
  router.post(
    '/api/create-new-category',
    categoryController.upload,
    categoryController.handleCreateCategory
  );
  router.put('/api/edit-category', categoryController.handleEditCategory);
  router.delete('/api/delete-category', categoryController.handleDeleteCategory);

  // Product
  router.get('/api/get-all-product', productController.getAllProduct);
  // router.get('/api/get-product', productController.getProduct);
  router.get('/api/get-product-in-category', productController.getProductInCategory);
  router.post(
    '/api/create-new-product',
    productController.upload,
    productController.handleCreateProduct
  );
  router.put('/api/edit-product', productController.upload, productController.handleEditProduct);
  router.delete('/api/delete-product', productController.handleDeleteProduct);

  // Order
  router.get('/api/get-all-order', orderController.getAllOrder);
  // router.get('/api/get-order', orderController.getOrder);
  router.get('/api/get-by-month-order', orderController.getOrderDataByMonth);
  router.post('/api/create-new-order', orderController.handleCreateOrder);
  router.put('/api/edit-order', orderController.handleEditOrder);
  router.delete('/api/delete-order', orderController.handleDeleteOrder);

  // OrderDetail
  router.get('/api/get-all-order-detail', orderDetailController.getAllOrderDetail);
  router.get('/api/get-order-detail', orderDetailController.getOrderDetailInOrder);
  router.post('/api/create-new-order-detail', orderDetailController.handleCreateOrderDetail);
  router.put('/api/edit-order-detail', orderDetailController.handleEditOrderDetail);
  router.delete('/api/delete-order-detail', orderDetailController.handleDeleteOrderDetail);

  // Blog
  router.get('/api/get-all-blog', blogController.getAllBlog);
  router.get('/api/get-blog', blogController.getBlog);
  router.post('/api/create-new-blog', blogController.upload, blogController.handleCreateBlog);

  return app.use('/', router);
};

module.exports = initWebRoutes;
