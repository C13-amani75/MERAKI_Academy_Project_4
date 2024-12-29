const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    category:
       {type: mongoose.Schema.Types.ObjectId,ref:"category"}/* {type: mongoose.Schema.Types.ObjectId,ref:"category"} */
    ,
    likes:{type:Number},   // 1 2 3 4 5  
    rate: {stars:[{ type:Number}],rate:{type:Number}},//[0,0,0,0,0]=>[0]=>st-Star
                                                      //1*[0] + 2*[1]+3*[2]+4*[3]+5*[4]/sumValues without duplication
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