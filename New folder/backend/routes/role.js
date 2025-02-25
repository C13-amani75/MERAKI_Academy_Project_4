const express = require("express")
const {createRole} = require("../controllers/role")
const roleRouter = express.Router()
roleRouter.post("/",createRole)



module.exports = {
    roleRouter
}
/* post => roles
http://localhost:5000/roles/ //body*/