const userModel = require("../models/userSchema")

//to do check every error state write it correctly
//write catch error in pro
const registerFunction = (req,res)=>{
    const {email,password,username,role}= req.body
    userModel.findOne({email:email})
    .populate("role")
    .then((result)=>{
        if(!result){
            const newUser = new userModel({
                email,
                password,
                username,
                card:[],
                favoriteList:[],
                role
            })
            newUser.save()
            .then(()=>{
                res.status(201).json({
                    success:true,
                    message:"the user created",
                    user:newUser
                })
            })
            .catch(()=>{
            })
        }
        else{
            res.status(409).json({
                success:false,
                message:"the user already exist"
            })
        }
    })
}

const loginFunction = (req,res)=>{
    const {email,password} = req.body
    userModel.findOne({email:email,password:password})
    .then((result)=>{
        if(result){
            res.status(200).json({
                success:true,
                message:"you log in successfully"
            })
        }
    })
    .catch((err)=>{
        res.json(err)
        
    })




}

module.exports = {
    registerFunction,
    loginFunction
}