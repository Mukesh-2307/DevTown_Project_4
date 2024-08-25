const mongoose = require("mongoose");

async function DbConnection(){
    const DB_URL = process.env.MONGO_URI;
    await mongoose.connect(DB_URL);
}

const db = mongoose.connection;
db.on("error",console.error.bind(console, "connection error !"));
db.once("open", function(){
    console.log("db connected successfully !");
});

module.exports = DbConnection;