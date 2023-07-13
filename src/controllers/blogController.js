import blogService from '../services/blogService';
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

const getAllBlog = async (req, res) => {
  let blogs = await blogService.getAllBlog(req.query.id);
  return res.status(200).json({
    blogs,
    errCode: 0,
    errMessage: 'Success',
  });
};

const getBlog = async (req, res) => {
  let id = req.query.id;
  let blog = await blogService.getBlog(id);
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: 'Missing required parameters',
    });
  }
  return res.status(200).json({
    errCode: 0,
    errMessage: 'Success',
    blog,
  });
};

const handleCreateBlog = async (req, res) => {
  let info = req.body;
  let image = req.file.path;
  let data = {
    info,
    image
  }
  let message = await blogService.createNewBlog(data);
  return res.status(200).json(message);
};

const handleEditBlog = async (req, res) => {
  let message = await blogService.editBlog(req.body);
  return res.status(200).json(message);
};

const handleDeleteBlog = async (req, res) => {
  let message = await blogService.deleteBlog(req.body.id);
  return res.status(200).json(message);
};

module.exports = {
  handleCreateBlog,
  handleEditBlog,
  handleDeleteBlog,
  getAllBlog,
  getBlog,
  upload,
};
