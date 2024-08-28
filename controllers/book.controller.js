const { userModel, bookModel } = require("../models/index.js");

exports.getAllBooks = async (req, res) => {
  const books = await bookModel.find();

  if (books.length === 0) {
    return res.status(404).json({
      success: false,
      message: "no books found",
    });
  }
  res.status(200).json({
    success: true,
    data: books,
  });
};

exports.getBookById = async (req, res) => {
  const { id } = req.params;
  const book = await bookModel.findById(id);
  if (!book) {
    return res.status(404).json({
      success: false,
      message: "book not found",
    });
  }
  return res.status(200).json({
    success: true,
    message: "book found",
    data: book,
  });
};

exports.getAllIssuedBooks = async (req, res) => {
  const users = await userModel.find({
    issuedBooks: {$exists: true}
  }).populate("issuedBooks");
  
  // need to impliment DTO i.e data transfer object

  if (issuedBooks.length === 0) {
    return res.status(404).json({
      success: false,
      message: "no book have been issued yet",
    });
  }
  return res.status(200).json({
    success: true,
    message: "users with the issued books",
    data: issuedBooks,
  });
};
