import authService from '../services/authService';

const checkLogin = async (req, res) => {
  let auth = await authService.checkLogin(req);
  return res.status(200).json({
    errCode: 0,
    errMessage: 'Success',
    auth,
  });
};

module.exports = {
  checkLogin,
};
