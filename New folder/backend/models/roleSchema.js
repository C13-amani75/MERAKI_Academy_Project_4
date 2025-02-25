const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    roleName:{
        type:String,
    },
    //user permission [likes ,add to card,add to favorite,
    //delete]
    //admain [add product delete product]
    permissions:[{type:String}]
}) 
module.exports = mongoose.model("role",roleSchema)

