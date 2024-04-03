const express = require("express");

const router = express.Router();

const Controller = require("../controllers/employeeController");
const Models = require("../models/Employeeschema")


router.post("/register",Controller.CreateEmployee)

router.get("/empdetails",Controller.getAllEmployess)

router.get("/singleEmp/:id",Controller.singleEmployee)

router.put("/update/:id",Controller.updateEmp)

router.delete("/delete/:id",Controller.deleteEmp)


module.exports = router