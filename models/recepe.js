const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
    "rtitle":{type:String,required:true},
    "rincrediants":{type:String,required:true},
    "image":{type:String,required:true}
    }
)
let recepemodel=mongoose.model("recepies",schema);
module.exports={recepemodel}
