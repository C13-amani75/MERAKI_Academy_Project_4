const express = require("express")
const rateRouter =  express.Router()
const {rateProductById} = require("../controllers/rate")
const {authentication} = require("../middleware/authentication")
rateRouter.post("/:productId",rateProductById)


module.exports = {rateRouter}