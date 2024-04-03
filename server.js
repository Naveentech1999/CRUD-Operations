const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const Employeerotues = require("./views/employeeRoutes")


const app = express();

app.use(bodyParser.json())

const PORT = process.env.PORT || 3030

dotenv.config();




mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("DB Connected Successfully..");
})
.catch((error)=>{
    console.log(`${error}`)
})


app.use("/employee",Employeerotues)

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT} Port...`)
})
