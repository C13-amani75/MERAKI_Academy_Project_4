const express = require("express")
const rateRouter = express.Router()
const authentication =require("../middleware/authentication")
const authorization =require("../middleware/authorization")

const { addRateByProductId,rateValue,
    deleteRateByProductId} = require("../controllers/rate")


rateRouter.post("/:productId",authentication,addRateByProductId)
rateRouter.delete("/:productId",deleteRateByProductId)
rateRouter.get("/rateProduct/:productId",rateValue)



module.exports = {rateRouter}