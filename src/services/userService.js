import db from '../models/index';
import bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const saltRounds = 10;

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, saltRounds);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        let user = await db.User.findOne({
          attributes: ['id', 'password'],
          raw: true,
          where: { email: email },
        });

        if (user) {
          let check = await bcrypt.compareSync(password, user.password);
          if (check) {
            let token = jwt.sign({ id: user.id }, 'mk');
            userData.errCode = 0;
            userData.errMessage = 'Ok';
            userData.token = token;
            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 1;
            userData.errMessage = 'Wrong password';
          }
        } else {
          userData.errCode = 1;
          userData.errMessage = `Your email isn't exist in your system. Pls try other email`;
        }
      } else {
        userData.errCode = 1;
        userData.errMessage = `Your email isn't exist in your system. Pls try other email`;
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = '';
      if (userId === 'ALL') {
        users = await db.User.findAll({
          attributes: {
            exclude: ['password'],
          },
        });
      }
      if (userId && userId !== 'ALL') {
        users = await db.User.findOne({
          where: { id: userId },
          attributes: {
            exclude: ['password'],
          },
        });
      }
      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let check = await checkUserEmail(data.info.email);
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage: 'Your email is already used. Pls try another email',
        });
      } else {
        let hashPasswordFromBcrypt = await hashUserPassword(data.info.password);
        db.User.create({
          email: data.info.email,
          image: data.image,
          firstName: data.info.firstName,
          lastName: data.info.lastName,
          password: hashPasswordFromBcrypt,
          phoneNumber: data.info.phoneNumber,
          address: data.info.address,
          gender: data.info.gender === '1' ? true : false,
          roleId: data.info.roleId,
        });
        resolve({
          errCode: 0,
          message: 'OK',
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: userId },
      });
      if (!user) {
        resolve({
          errCode: 2,
          errMessage: `The user isn't exist`,
        });
      } else {
        await db.User.destroy({
          where: { id: userId },
        });
        resolve({
          errCode: 0,
          errMessage: 'The user was deleted',
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let updateUserData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 2,
          errMessage: 'Missing required parameter',
        });
      }
      let user = await db.User.findOne({
        where: { id: data.id },
        raw: false,
      });

      if (user) {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;
        user.phoneNumber = data.phoneNumber;
        user.gender = data.gender;
        user.roleId = data.roleId;

        await user.save();

        resolve({
          errCode: 0,
          message: 'Update the user success!',
        });
      } else {
        resolve({
          errCode: 1,
          message: 'User is not found!',
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  handleUserLogin: handleUserLogin,
  getAllUsers: getAllUsers,
  createNewUser: createNewUser,
  deleteUser: deleteUser,
  updateUserData: updateUserData,
};
