const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    category:{
        type:{type: mongoose.Schema.Types.ObjectId,ref:"category"}
    },
    likes:{type:Number},
    rate: {type:Number},
    picture:{
        type:String
    },
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

module.exports = mongoose.Model("product",productSchema)