const userModel = require("../models/userSchema")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt") 

//to do check every error state write it correctly
//write catch error in pro
//1-----------------------------------------------------------
const registerFunction = (req,res)=>{   //Done//
    const {email,password,username,role}= req.body
    userModel.findOne({email:email})
    .then((result)=>{
        console.log(result);
        if(result){
            res.status(200).json({
                success:false,
                message:"the user already exist"
            })
        }
        else{
            console.log("Register1");
            const newUser = new userModel({
                email,
                password,
                username,
                role,
                card:[],
                favoriteList:[]
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
                console.log(err);
                
                res.json(err)
            })
        }

        }).catch((err)=>{
            res.json(err)
        })
    }
const loginFunction = (req,res)=>{ //Done
    const {email,password} = req.body
   //check at first the email without the pass
    userModel.findOne({email:email})
     //check if the email exist ,then if the hashed password is already the same==>async process
    .populate("role")
    .then(async (result)=>{
        if(!result){
            res.status(403).json({result:"the email is invalid",
            })

        }
        else{
            const isValidPassword = await bcrypt.compare(password,result.password)
            if(!isValidPassword){
                res.status(403).json({
                    success:false,
                    message:"the password is incorrect"
                })  
            }
                else{
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
}
    }).catch((err)=>{
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