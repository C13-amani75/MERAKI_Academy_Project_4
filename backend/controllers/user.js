const userModel = require("../models/userSchema")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt") 

//to do check every error state write it correctly
//write catch error in pro
const registerFunction = (req,res)=>{
    const {email,password,username,role}= req.body
    userModel.findOne({email:email})
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
   //check at first the email without the pass
    const emailValue =email.toUpperCase()
    userModel.findOne({email:emailValue})
     //check if the email exist ,then the hashed password is already the same==>async process
    .populate("role")
    .then(async (result)=>{
        console.log(result.password);
        if(result){
            console.log(password);
            const isValidPassword = await bcrypt.compare(password,result.password)
            if(isValidPassword){
                //create token
                const payload ={
                    userId:result._id,
                    permissions:result.role.permissions,
                    username:result.username,
                    card:result.card,
                    favorite_list:result.favoriteList
                }
                const options = {
                    expiresIn:"24hr"
                }
                const token = jwt.sign(payload,process.env.SECRET_KEY,options);
                res.status(200).json({
                success:true,
                message:"you log in successfully",
                token:token,
                user:result,
                url:"https://www.pexels.com/photo/woman-wearing-brown-leather-tote-bag-1936848/"
            })
        }
        else{
            res.status(404).json({
                success:false,
                message:"the email invalid"
            })   
            }
            res.status(404).json("the password is not correct")
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}
//-------------------------------------------------------------------------------------------------------------------------------








module.exports = {
    registerFunction,
    loginFunction
}