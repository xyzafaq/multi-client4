const mongoose = require("mongoose")
const DB = process.env.CLOUD_DATABASE
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://xyzafaq:1Afaqali@cluster0.isd73m5.mongodb.net/?retryWrites=true&w=majority").then(()=>{console.log("Connection Successful")}).catch((error)=>{console.log(error)});