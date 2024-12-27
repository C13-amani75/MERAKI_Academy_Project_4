const mongoose = require("mongoose");
const bcrypt =require("bcrypt")
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    //[]
    //cards[{idof product:{{type: mongoose.Schema.Types.ObjectId}},quintity:Number },quntity of the whole products:{Number} [++quintity of every product]]
    card:[{
        productId:{type: mongoose.Schema.Types.ObjectId},
        quantity:{type:Number}
        
    }],// id of product
    favoriteList:[{type: mongoose.Schema.Types.ObjectId}],//id of product
    role:{type: mongoose.Schema.Types.ObjectId,ref:"role"}

})
userSchema.pre("save",async function(){
        const hashed = await bcrypt.hash(this.password,10)
        return hashed

    
    bcrypt.hash(this.password,8)
})
module.exports = mongoose.model("user",userSchema)