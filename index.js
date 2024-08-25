const express = require("express");
const dotenv = require("dotenv");
const DbConnection = require("./DbConnect");

dotenv.config();

const app = express();

DbConnection();

const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT,()=>{
    console.log(`app is listening at port : ${PORT}`);
});
