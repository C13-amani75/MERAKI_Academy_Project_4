const express = require("express")
require("dotenv").config()


const userRouter = express.Router()
const{registerFunction,
    loginFunction, getAllUsers} = require("../controllers/user")


userRouter.post("/register",registerFunction)
//just in login authen 
userRouter.post("/login",loginFunction)
userRouter.get("/",getAllUsers)

module.exports = {
    userRouter
}

/* post => users
http://localhost:5000/users/register //body
http://localhost:5000/users/login //body

get =>users



 */
