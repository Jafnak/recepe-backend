const cors = require("cors")
const express  = require("express")
const  mongoose =require("mongoose")
const {recepemodel} = require("./models/recepe")


const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://Jafna02:jafna9074@cluster0.icijy.mongodb.net/recepeDb?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input = req.body
    let recepe = new recepemodel(input)
    recepe.save()
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    recepemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.get("/search",(req,res)=>{
    res.send("test")
})

app.get("/delete",(req,res)=>{
    res.send("test")
})


app.listen(8080,()=>{
    console.log("Server started")
})