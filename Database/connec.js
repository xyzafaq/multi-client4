const mongoose = require("mongoose")
const DB = process.env.Database
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/alan").then(()=>{console.log("Connection Successful")}).catch((error)=>{console.log(error)});