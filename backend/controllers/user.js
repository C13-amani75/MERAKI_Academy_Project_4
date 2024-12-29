const userModel = require("../models/userSchema")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt") 

//to do check every error state write it correctly
//write catch error in pro
const registerFunction = (req,res)=>{
    const {email,password,username,role}= req.body
    console.log(userModel.length);
    userModel.findOne({email:email})
    .then((result)=>{
        console.log("Register");
        if(result){
            res.status(409).json({
                success:false,
                message:"the user already exist"
            })
        }

    console.log("Register1");
    const newUser = new userModel({
                email,
                password,
                username,
                role,
                card:[],
                favoriteList:[]
            })
            newUser.save()
            .then((result)=>{
                console.log("Register2");
                res.status(201).json({
                    success:true,
                    message:"the user created",
                    user:result
                })
            })
            .catch((err)=>{
                res.json(2)
            })
        }
    
           
        
    
)}
const loginFunction = (req,res)=>{
    const {email,password} = req.body
   //check at first the email without the pass
    const emailValue =email.toUpperCase()
    userModel.findOne({email:emailValue})
     //check if the email exist ,then the hashed password is already the same==>async process
    .populate("role")
    .then(async (result)=>{
        if(result){
            const isValidPassword = await bcrypt.compare(password,result.password)
            if(isValidPassword){
                //create token
                const payload = {
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
        }
    }).catch((err)=>{
        res.json(err)

    })
}
//-------------------------------------------------------------------------------------------------------------------------------








module.exports = {
    registerFunction,
    loginFunction
}