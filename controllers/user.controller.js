const { userModel, bookModel } = require("../models/index.js");

exports.addNewUser = async (req, res) => {
  const { data } = req.body;
  const oldUser = await userModel.findOne({
    roll: data.roll,
  });

  if (oldUser) {
    return res.status(404).json({
      success: false,
      message: "user already exists",
    });
  }
  if (!data) {
    return res.status(404).json({
      success: false,
      message: "not enough data",
    });
  }

  await userModel.create(data);
  const allUsers = await userModel.find();
  return res.status(200).json({
    success: true,
    message: "user added successfully",
    data: allUsers,
  });
};

exports.deleteUserById = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  await userModel.findOneAndDelete({
    _id: id,
  });
  const allUsers = await userModel.find();
  return res.status(200).json({
    success: true,
    message: "user deleted successfully",
    data: allUsers,
  });
};

exports.findUserById = async (req, res) => {
  const { id } = req.params;

  const user = await userModel.findById({
    _id: id,
  });

  if (user) {
    return res.status(200).json({
      success: true,
      message: "user found",
      data: user,
    });
  }
  return res.status(404).json({
    success: false,
    message: "user doesn't exist",
  });
};

exports.getAllUsers = async (req, res) => {
  const allUsers = await userModel.find();
  const noOfUsers = allUsers.length;

  if (allUsers.length === 0) {
    return res.status(404).json({
      success: false,
      message: "no users found",
    });
  }
  return res.status(200).json({
    success: true,
    message: noOfUsers,
    data: allUsers,
  });
};

exports.updateUserById = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  if (!data) {
    return res.status(404).json({
      success: false,
      message: "data not available",
    });
  }
  const updatedUser = await userModel.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $set:{
        ...data
      }
    },
    {
      new: true, // this statement will always ensures that every time we search for data after updation, then we get the updated values not the old values.
    }
  );
  return res.status(201).json({
    success: true,
    message: "user updated successfully",
    data: updatedUser,
  });
};
