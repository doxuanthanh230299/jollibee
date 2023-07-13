import db from '../models/index';

const getAllCategory = async (categoryId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let categories = '';
      if ((categoryId = 'ALL')) {
        categories = await db.Category.findAll();
      } else {
        categories = await db.Category.findOne({
          where: { id: categoryId },
        });
      }
      resolve(categories);
    } catch (e) {
      reject(e);
    }
  });
};

let checkNameCategory = (categoryName) => {
  return new Promise(async (resolve, reject) => {
    try {
      let category = await db.Category.findOne({
        where: { name: categoryName },
      });
      if (category) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

const createNewCategory = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let check = await checkNameCategory(data.info.name);
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage: 'Your category name was already, please try another category name',
        });
      } else {
        db.Category.create({
          name: data.info.name,
          image: data.image,
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

const editCategory = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 1,
          errMessage: 'Missing required parameter',
        });
      }
      let category = await db.Category.findOne({
        where: { id: data.id },
        raw: false,
      });

      if (category) {
        (category.name = data.name),
          (category.image = data.image),
          (category.valueEn = data.valueEn),
          (category.valueVi = data.valueVi),
          await category.save();

        resolve({
          errCode: 0,
          errMessage: 'Update success!',
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: 'Category not found!',
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const deleteCategory = (categoryId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let category = await db.Category.findOne({
        where: { id: categoryId },
      });
      if (!category) {
        resolve({
          errCode: 1,
          errMessage: 'The category is not exist',
        });
      } else {
        await db.Category.destroy({
          where: { id: categoryId },
        });
        resolve({
          errCode: 0,
          errMessage: 'The category was deleted!',
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createNewCategory,
  editCategory,
  deleteCategory,
  getAllCategory,
};
