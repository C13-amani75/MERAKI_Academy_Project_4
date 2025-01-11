const mongoose =require("mongoose")

const rateSchema = new mongoose.Schema({
    userId:{type: mongoose.Schema.Types.ObjectId,ref:"user"},
    productId:{type: mongoose.Schema.Types.ObjectId,ref:"product"},
    rateValue:{
        type:Number //[1,2,3,4,5] any of these numbers
    }

})

module.exports = mongoose.model("rate",rateSchema)