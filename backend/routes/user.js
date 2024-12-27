const express = require("express")

const userRouter = express.Router()
const{registerFunction,
    loginFunction} = require("../controllers/user")

userRouter.post("/register",registerFunction)
userRouter.post("/login",loginFunction)

module.exports = {
    userRouter
}