const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({

        Name:{
            type: String,
           
        },
        Email:{
            type:String,
            required:true
        },
        PhoneNo:{
            type:String,
            default:false
        },
        City:{
            type:String,
        },
        Image:{
            type:String,
            required:true
        }


})


module.exports = mongoose.model("Employee",employeeSchema)