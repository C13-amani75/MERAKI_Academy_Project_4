const userModel = require("../models/userSchema")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt") 

//to do check every error state write it correctly
//write catch error in pro
//1-----------------------------------------------------------
const registerFunction = (req,res)=>{   //Done//
    const {email,password,username,role} = req.body
            console.log("Register1");
            const newUser = new userModel({
                email,
                password,
                username,
                role
            })
            newUser
            .save()
            .then((result)=>{
                console.log(result,"result");  
                console.log("Register2");
                res.status(201).json({
                    success:true,
                    message:"the user created",
                    user:result
                })
            })
            .catch((err)=>{
                if(err.keyPattern){
                    res.status(409).json({
                        success:false,
                        message:"the email is already exist",
                    })
                }
                
                res.status(500).json({
                    success:false,
                    message:"server Error",
                    result:err
                })
            })
    }
const loginFunction = (req,res)=>{ 
    //Done
    const {email,password} = req.body
   //check at first the email without the pass
    userModel.findOne({email:email.toLowerCase()})//check if the email exist ,then if the hashed password is already the same==>async process
    .populate("role")
    .then(async (result)=>{
        console.log(result);
        
        if(!result){
            res.status(403).json({
                success:false,
                message:"the email is incorrect"
            })
        }
        else{
            try{
                console.log(2);
                    const isValidPassword = await bcrypt.compare(password,result.password)
                    if(!isValidPassword){
                        console.log(3);
                        res.status(403).json({
                            success:false,
                            message:"the password is incorrect"
                        })  
                    }
                      //create token
                        const payload = {
                        userId:result._id,
                       /*  permissions:result.role.permissions, */
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
                    user:result
                })
        }catch(error){
            throw new Error(
                error
            )
        
        }

        }
    
})
.catch((err)=>{
        console.log(err);
        res.json(err)
    })
}

const getAllUsers = (req,res)=>{
    userModel.find({})
    .populate("role")
    .then((result)=>{
        res.json(result)
    })
    .catch((error)=>{
        res.json(error)

    })
}
//-------------------------------------------------------------------------------------------------------------------------------

module.exports = {
    registerFunction,
    loginFunction,
    getAllUsers
}