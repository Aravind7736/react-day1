//importing the express
const express=require('express')

const employeeModel=require('./model')

//2.initialization

const app = new express()

//middleware|| parsing the parameter
 app.use(express.urlencoded({extened:true}))
 app.use(express.json())

//3.api creation
//app.get('/',(req,res)=>{
    //res.send("this message is from server")
//})
app.get('/me',(req,res)=>{
    res.send("(^..^)")
})
app.get('/data',(req,res)=>{
        res.json(
            {"name":"Aravind",
    "age":19}
    )
    })
    //api for adding data//
    app.post('/create',async(req,res)=>{
        var result = await new employeeModel(req.body)
        result.save()
        res.send("Data Added")                          
    })
app.get('/view',async(req,res)=>{
    var data = await employeeModel.find()
    res.json(data)
    console.log(data)
})
    //api for delete  data//
    app.delete('/remove/:id',async(req,res)=>{
   console.log(req.params)  
   let id = req.params.id
   await employeeModel.findByIdAndDelete(id) 
   res.send("deleted")  
    })
    app.put('/edit/:id',async(req,res)=>{
        let id = req.params.id
        await employeeModel.findByIdAndUpdate(id,req.body)
        res.send("data updated")
    })
//4.port
app.listen(3005,()=>{
    console.log("port 3005 is up and running")
})
