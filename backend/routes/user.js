const express = require("express")
require("dotenv").config()
const authentication =require("../middleware/authentication")

const userRouter = express.Router()
const{registerFunction,
    loginFunction} = require("../controllers/user")


userRouter.post("/register",registerFunction)
//just in login authen 
userRouter.post("/login",loginFunction)

module.exports = {
    userRouter
}