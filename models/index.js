const express = require("express");
const router = express.Router;
const bookModel = require("./book.model.js");
const userModel = require("./user.model.js");


module.exports = {userModel,bookModel}