const mongoose= require("mongoose")

mongoose.connect("mongodb+srv://aravindsabu760:aravind@cluster0.6lla1jd.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connected")

})
.catch(err=>console.log(err))

let mongoSchema = mongoose.Schema

const EmployeeSchema = new mongoSchema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number
})

var employeeModel=mongoose.model("employee",EmployeeSchema)
module.exports = employeeModel 
