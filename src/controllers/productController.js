import productService from '../services/productService';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/Products');
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
}).single('thumbnail');

const getAllProduct = async (req, res) => {
  let products = await productService.getAllProduct(req.body.id);
  return res.status(200).json({
    errCode: 0,
    errMessage: 'Ok',
    products,
  });
};

const getProduct = async(req,res) => {
  let product = await productService.getProduct(req.query.id);
  return res.status(200).json({
    errCode: 0,
    errMessage: 'Success',
    product,
  });
}

const getProductInCategory = async (req, res) => {
  let categoryProduct = await productService.getProductInCategory(req.body.categoryId);
  return res.status(200).json({
    errCode: 0,
    errMessage: 'OK',
    categoryProduct,
  });
};

const handleCreateProduct = async (req, res) => {
  let info = req.body;
  let image = req.file.path;
  let data = {
    info,
    image,
  };
  let message = await productService.createNewProduct(data);
  return res.status(200).json(message);
};

const handleEditProduct = async (req, res) => {
  let message = await productService.editProduct(req);
  return res.status(200).json(message);
};

const handleDeleteProduct = async (req, res) => {
  let message = await productService.deleteProduct(req.body.id);
  return res.status(200).json(message);
};

module.exports = {
  handleCreateProduct,
  handleEditProduct,
  handleDeleteProduct,
  getAllProduct,
  getProduct,
  getProductInCategory,
  upload,
};
