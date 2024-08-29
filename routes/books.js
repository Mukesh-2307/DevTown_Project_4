const express = require("express");
const router = express.Router();
const { userModel, bookModel } = require("../models/index.js");
const { getAllBooks, getBookById, getAllIssuedBooks, addNewBook, updateBookById, deleteBookById} = require("../controllers/book.controller.js");

router.get("/getBooks",getAllBooks);
router.get("/getBook/:id",getBookById);
router.get("/issuedBooks",getAllIssuedBooks);
router.post("/newBook",addNewBook);
router.put("/updateBook/:id",updateBookById);
router.delete("/deleteBook/:id",deleteBookById);

module.exports = router;