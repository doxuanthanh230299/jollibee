import db from '../models/index';

const getAllBlog = async (blogId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let blogs = '';
      if ((blogId = 'ALL')) {
        blogs = await db.Blogs.findAll();
      } else {
        blogs = await db.Blogs.findOne({
          where: { id: blogId },
        });
      }
      resolve(blogs);
    } catch (e) {
      reject(e);
    }
  });
};

const getBlog = async (inputId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let blog = '';
      blog = await db.Blogs.findOne({
        where: { id: inputId },
      });
      resolve(blog);
    } catch (e) {
      reject(e);
    }
  });
};

const createNewBlog = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let blog = await db.Blogs.create({
        title: data.info.title,
        userId: data.info.userId,
        image: data.image,
        categoryId: data.info.categoryId,
        post: data.info.post,
        valueEn: data.info.valueEn,
        valueVi: data.info.valueVi,
      });
      resolve({
        blog,
        errCode: 0,
        errMessage: 'Success',
      });
    } catch (e) {
      reject(e);
    }
  });
};

// const editBlog = async (data) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       if (!data.id) {
//         resolve({
//           errCode: 1,
//           errMessage: 'Missing required parameter',
//         });
//       }
//       let blog = await db.Blog.findOne({
//         where: { id: data.id },
//         raw: false,
//       });

//       if (blog) {
//         (blog.name = data.name),
//           (blog.title = data.title),
//           (blog.userId = data.userId),
//           // (blog.image = data.image),
//           (blog.valueEn = data.valueEn),
//           (blog.valueVi = data.valueVi),
//           await blog.save();

//         resolve({
//           errCode: 0,
//           errMessage: 'Update success!',
//         });
//       } else {
//         resolve({
//           errCode: 1,
//           errMessage: 'Blog not found!',
//         });
//       }
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

// const deleteBlog = (blogId) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let blog = await db.Blog.findOne({
//         where: { id: blogId },
//       });
//       if (!blog) {
//         resolve({
//           errCode: 1,
//           errMessage: 'The blog is not exist',
//         });
//       } else {
//         await db.Blog.destroy({
//           where: { id: blogId },
//         });
//         resolve({
//           errCode: 0,
//           errMessage: 'The blog was deleted!',
//         });
//       }
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

module.exports = {
  createNewBlog,
  // editBlog,
  // deleteBlog,
  getAllBlog,
  getBlog,
};
