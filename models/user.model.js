const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    roll: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    issuedBooks: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
      required: false,
    },
    issuedDate: {
      type: String,
      required: false,
    },
    returneDate: {
      type: String,
      required: false,
    },
    subscriptionType: {
      type: String,
      required: true,
    },
    subscriptionDate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", UserSchema);
