import Http from './Http';

// Product
export const getAllProduct = (config) => Http.get('get-all-product', config);
export const getProduct = (id, config) => Http.get(`get-product?id=${id}`, config);
export const editProduct = (data, config) => Http.put('edit-product', data, config);
export const createProduct = (data, config) => Http.post('create-new-product', data, config);

// Order
export const createOrder = (data, config) => Http.post('create-new-order', data, config);
export const editOrder = (data, config) => Http.put('edit-order', data, config);
export const deleteOrder = (data, config) => Http.put('edit-order', data, config);
export const getOrder = (id, config) => Http.get(`get-order?id=${id}`, config);
export const getAllOrder = () => Http.get('get-all-order');
export const getOrderDataByMonth = (id) => Http.get(`get-by-month-order?id=${id}`);

// Categories
export const getAllCategory = () => Http.get('get-all-category');
export const createNewCategory = (data, config) => Http.post('create-new-category', data, config);
export const deleteCategory = (data) => Http.delete('delete-category', data);
export const editCategory = (data) => Http.put('edit-category', data);

// Order Detail
export const createOrderDetail = (data, config) => Http.post('create-new-order-detail', data, config);
export const editOrderDetail = (data, config) => Http.put('edit-order-detail', data, config);
export const getOrderDetail = (id, config) => Http.get(`get-order-detail?orderId=${id}`, config);

// Blog
export const getAllBlog = (id, config) => Http.get('get-all-blog', config);
export const getBlog = (id, config) => Http.get(`get-blog?id=${id}`, config);

// User
export const registerUser = (data) => Http.post('create-new-user', data);
export const getUser = (id) => Http.get(`get-all-users?id=${id}`);
export const editUser = (data) => Http.put('edit-user', data);

// Login
export const login = (data) => Http.post('login', data);
