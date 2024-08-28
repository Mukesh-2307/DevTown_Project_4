const { Router } = require("express");
const { userModel, bookModel } = require("../models/index.js");
const { getAllBooks, getBookById, getAllIssuedBooks } = require("../controllers/book.controller.js");

Router.get("/getBooks",getAllBooks);
Router.get("/getBook/:id",getBookById);
Router.get("/issuedBooks",getAllIssuedBooks);