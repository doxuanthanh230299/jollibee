import db from '../models/index';

let checkLogin = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let token = req.cookies.token;
      let idUser = jwt.verify(token, 'mk');
      db.User.findOne({
        where: { id: idUser },
      });
      resolve(idUser);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  checkLogin,
};
