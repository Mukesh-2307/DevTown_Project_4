const express = require("express");
const router = express.Router();
const {userModel,bookModel} = require("../models/index.js");

// import all the routes from user controller 
const {addNewUser, deleteUserById, findUserById, getAllUsers, updateUserById} = require("../controllers/user.controller.js")

// link the imported routes with the desired routes names
router.post("/newUser", addNewUser);
router.delete("/deleteUser/:id",deleteUserById);
router.get("/getUser/:id",findUserById);
router.get("/getUsers",getAllUsers);
router.put("/updateUser/:id",updateUserById);

module.exports = router;