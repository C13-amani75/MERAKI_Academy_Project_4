const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    
    categoryName:{
        type:{type: mongoose.Schema.Types.ObjectId},
     
    },
    likes:{ type:Number},
    rate: { type:Number},
    picture:
        [{ type:String}]
    ,
    description:{
        type:String
    },
    size:[{
        type:String
    }],
    color:[{
        type:String //color rgb
    }]
})

module.exports = mongoose.model("product",productSchema)