class IssuedBook {
  _id; // the underscore before "id" indicates that the "id" is a auto generate variable
  name;
  genre;
  price;
  issuedBy;
  issuedDate;
  returnDate;

  // whenever we create object of the above class, the below      constructor get invoked and the constructor is a parameterised constructor

  // a constructor doesn't have any kind of return type

  constructor(user) {
    this._id = user.IssuedBook._id;
    this.name = user.IssuedBook.name;
    this.price = user.IssuedBook.price;
    this.issuedBy = user.name;
    this.issuedDate = user.issuedDate;
    this.returnDate = user.returnDate;
  }
}

module.exports = IssuedBook;
