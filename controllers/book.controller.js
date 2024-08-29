const { userModel, bookModel } = require("../models/index.js");
const IssuedBook = require("../DTOs/book.dto.js");

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
  const users = await userModel
    .find({
      issuedBooks: { $exists: true },
    })
    .populate("issuedBooks");

  // need to impliment DTO i.e data transfer object
  const issuedBooks = users.map((each) => new IssuedBook(each));

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

exports.addNewBook = async (req, res) => {
  const { data } = req.body;
  console.log(data);

  if (!data) {
    return res.status(404).json({
      success: false,
      message: "data not available",
    });
  }

  await bookModel.create(data);
  const allBooks = await bookModel.find();

  return res.status(200).json({
    success: true,
    message: "book added successfully",
    data: allBooks,
  });
};

exports.updateBookById = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  if (!data) {
    return res.status(404).json({
      success: false,
      message: "data not available",
    });
  }
  const updatedBook = await bookModel.findOneAndUpdate(
    {
      _id: id,
    },
    data,
    {
      new: true, // this statement will always ensures that every time we search for data after updation, then we get the updated values not the old values.
    }
  );
  return res.status(201).json({
    success: true,
    message: "book updated successfully",
    data: updatedBook,
  });
};

exports.deleteBookById = async (req, res) => {
  const { id } = req.params;

  const deletedBook = await bookModel.deleteOne(
  {
    _id: id,
  }
);
  const allBooks = await bookModel.find();
  return res.status(200).json({
    success: true,
    message: "book deleted",
    data: {deletedBook,allBooks}
  });
};
