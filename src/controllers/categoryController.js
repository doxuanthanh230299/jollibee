import categoryService from '../services/categoryService';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/Categories');
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

const getAllCategory = async (req, res) => {
  let categories = await categoryService.getAllCategory(req.body.id);
  return res.status(200).json({
    errCode: 0,
    errMessage: 'Ok',
    categories,
  });
};

const handleCreateCategory = async (req, res) => {
  let info = req.body;
  let image = req.file.path;
  let data = {
    info,
    image
  }
  let message = await categoryService.createNewCategory(data);
  return res.status(200).json(message);
};

const handleEditCategory = async (req, res) => {
  let message = await categoryService.editCategory(req.body);
  return res.status(200).json(message);
};

const handleDeleteCategory = async (req, res) => {
  let message = await categoryService.deleteCategory(req.body.id);
  return res.status(200).json(message);
};

module.exports = {
  handleCreateCategory,
  handleEditCategory,
  handleDeleteCategory,
  getAllCategory,
  upload,
};
