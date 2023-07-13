import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};

let CRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  return res.send("Post Crud from server");
};

let getCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  return res.render("displayCRUD.ejs", {
    data,
  });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDService.getUserById(userId);
    return res.render("editCRUD.ejs", {
      userData,
    });
  } else {
    return res.send("User not found");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  let allUsers = await CRUDService.updateUserData(data);
  return res.render("displayCRUD.ejs", {
    data: allUsers,
  });
};

let deleteCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    await CRUDService.deleteUserById(userId);
  } else {
    return res.send("User not found!");
  }
  return res.send("Delete success!!");
};

module.exports = {
  getHomePage,
  CRUD,
  postCRUD,
  getCRUD,
  getEditCRUD,
  putCRUD,
  deleteCRUD,
};
