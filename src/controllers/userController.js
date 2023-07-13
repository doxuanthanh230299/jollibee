import userService from '../services/userService';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/Users');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: '5000000' },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb('Give proper files formate to upload');
  },
}).single('image');

const handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: 'Missing inputs parameter',
    });
  }

  let userData = await userService.handleUserLogin(email, password);
  return res.status(200).json({
    errCode: userData.errCode,
    token: userData.token,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

const getAllUsers = async (req, res) => {
  let id = req.query.id; //All, single
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: 'Missing required parameters',
      users: [],
    });
  }
  let users = await userService.getAllUsers(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: 'OK',
    users,
  });
};

const handleCreateNewUser = async (req, res) => {
  let info = req.body;
  let image = '';
  if (req.file) {
    image = req.file.path;
  }
  let data = {
    info,
    image,
  };
  let message = await userService.createNewUser(data);
  return res.status(200).json(message);
};

const handleEditUser = async (req, res) => {
  let data = req.body;
  let message = await userService.updateUserData(data);
  return res.status(200).json(message);
};

const handleDeleteUser = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: 'Missing required parameters!',
    });
  }
  let message = await userService.deleteUser(req.body.id);
  return res.status(200).json(message);
};

module.exports = {
  handleLogin,
  getAllUsers,
  handleCreateNewUser,
  handleEditUser,
  handleDeleteUser,
  upload,
};
