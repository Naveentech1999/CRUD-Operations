
const  Employee = require("../models/Employeeschema");


const CreateEmployee = async(req,res)=>{
    try{
        const { Name, Email, PhoneNo, City ,Image} = req.body;

        const employees = new Employee({
            Name,   
            Email,
            PhoneNo,
            City,
            Image
        });
        await employees.save();
        res.status(201).json({message:"Employe Details Stored in DB Sucessfully..."})
    }
    catch(error){
        console.log(error);
        res.redirect("/Register")
    }
}


const getAllEmployess = async(req,res)=>{
    try{ 
        const employees = await Employee.find();
        if(!employees){
            return res.status(404).json({message:"Employee not found"})
        }
        res.status(201).json(employees)
    }
    catch(err){
        console.log(err)
        res.status(404).json({message:"Employee not found"})
    }
}

const singleEmployee = async(req,res)=>{
    try{
        const employees = await Employee.findById(req.params.id)
        if(!employees){
            return res.status(404).json({message:"Employee not found"})
        }
        res.status(200).json(employees)    
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Server Error"})
    }
}


const updateEmp = async(req,res)=>{
    try{
        const{ Name, Email, PhoneNo, City} = req.body
        const employees = await Employee.findByIdAndUpdate(req.params.id,{Name,Email,PhoneNo,City})
        if(!employees){
            return res.status(404).json({message:"Employee not found"})
        }
        res.status(200).json({message:"Updated Sucessfully..."})
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Server Error"})
    }
}


const deleteEmp = async(req,res) => {
    try{
        const deleteemploye = await Employee.findByIdAndDelete(req.params.id);
        res.status(200).send({message:"deleted successfully"})
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Server Error"})
    }
}

 
module.exports = { CreateEmployee , getAllEmployess , singleEmployee , updateEmp , deleteEmp}