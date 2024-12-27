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
    this.email = this.email.toUpperCase()
        const hashed = await bcrypt.hash(this.password,process.env.SALT)
        this.password = hashed

    
    
})
module.exports = mongoose.model("user",userSchema)