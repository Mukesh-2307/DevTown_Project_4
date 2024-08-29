const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const DbConnection = require("./DbConnect");
const {users, books} = require("./models/index.js");

const userRouter = require("./routes/users.js");
const booksRouter = require("./routes/books.js");
dotenv.config();

const app = express();

DbConnection();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/books",booksRouter);
app.use("/users",userRouter);

app.get("*",(req,res)=>{
    return res.status(404).json({
        success: false,
        message: "route doesn't exist !"
    })
})


app.listen(PORT,()=>{
    console.log(`app is listening at port : ${PORT}`);
});
