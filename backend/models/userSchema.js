const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
    //cards[{idof product:{{type: mongoose.Schema.Types.ObjectId}},quintity:Number },quntity of the whole products:{Number} [++quintity of every product]]
    card:[ 
        {element:{type: mongoose.Schema.Types.ObjectId,ref:"product"} , quantity:{type:Number}}
    ],// id of product
    favoriteList:[{type: mongoose.Schema.Types.ObjectId,ref:"product"}],//id of product
    role:{type: mongoose.Schema.Types.ObjectId,ref:"role"}
})
userSchema.pre("save",async function(){
    console.log(this.email.toLowerCase,this.password);
    this.email = (this.email.toLowerCase())
    const salt = 10
        const hashed = await bcrypt.hash(this.password,salt);
        this.password = hashed    
})
module.exports = mongoose.model("user",userSchema)