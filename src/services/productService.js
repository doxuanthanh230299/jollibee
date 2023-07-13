import db from '../models/index';

const getAllProduct = async (productId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = '';
      if ((productId = 'ALL')) {
        products = await db.Product.findAll();
      } else {
        products = await db.Product.findOne({
          where: { id: productId },
        });
      }
      resolve(products);
    } catch (e) {
      reject(e);
    }
  });
};

const getProduct = async (productId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let product = await db.Product.findOne({
        where: { id: productId },
      });
      resolve(product);
    } catch (e) {
      reject(e);
    }
  });
};

const getProductInCategory = async (inputId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = '';
      if (inputId) {
        products = await db.Product.findAll({
          where: { categoryId: inputId },
        });
      }
      resolve(products);
    } catch (e) {
      reject(e);
    }
  });
};

let checkNameProduct = (productName) => {
  return new Promise(async (resolve, reject) => {
    try {
      let product = await db.Product.findOne({
        where: { name: productName },
      });
      if (product) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

const createNewProduct = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let check = await checkNameProduct(data.info.name);
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage: 'Your product name was already, please try another product name',
        });
      } else {
        db.Product.create({
          categoryId: data.info.categoryId,
          name: data.info.name,
          price: data.info.price,
          discount: data.info.discount,
          thumbnail: data.image,
          deleted: data.info.deleted,
          valueEn: data.info.valueEn,
          valueVi: data.info.valueVi,
        });
        resolve({
          errCode: 0,
          errMessage: 'OK',
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const editProduct = async (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!req.body.id) {
        resolve({
          errCode: 1,
          errMessage: 'Missing required parameter',
        });
      }
      let product = await db.Product.findOne({
        where: { id: req.body.id },
        raw: false,
      });

      if (product) {
        if (req.file) {
          product.categoryId = req.body.categoryId;
          product.name = req.body.name;
          product.price = req.body.price;
          product.discount = req.body.discount;
          product.thumbnail = req.file.path;
          product.deleted = req.body.deleted;
          product.valueEn = req.body.valueEn;
          product.valueVi = req.body.valueVi;
          await product.save();
        } else {
          product.categoryId = req.body.categoryId;
          product.name = req.body.name;
          product.price = req.body.price;
          product.discount = req.body.discount;
          product.deleted = req.body.deleted;
          product.valueEn = req.body.valueEn;
          product.valueVi = req.body.valueVi;
          await product.save();
        }

        resolve({
          errCode: 0,
          errMessage: 'Update success!',
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: 'Product not found!',
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const deleteProduct = (productId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let product = await db.Product.findOne({
        where: { id: productId },
      });
      if (!product) {
        resolve({
          errCode: 1,
          errMessage: 'The product is not exist',
        });
      } else {
        await db.Product.destroy({
          where: { id: productId },
        });
        resolve({
          errCode: 0,
          errMessage: 'The product was deleted!',
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createNewProduct,
  editProduct,
  deleteProduct,
  getAllProduct,
  getProductInCategory,
  getProduct,
};
