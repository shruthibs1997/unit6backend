const express = require('express');
const app = express();

const connect = require("./config/db")

// const  {register,login}=require("./controller/user.controller");
const lectureController=require("./controller/lecture.contoller");
//middleware
app.use(express.json());

// app.post("/users",register);
// app.post("/login",login);
app.use("/lecture",lectureController)

app.listen(5678,async()=>{
    await connect;
    console.log('listening to the port 5678')
})