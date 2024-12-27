const express = require("express")
const productRouter = express.Router()
const {addProduct,deleteProductById} = require("../controllers/product")

productRouter.post("/create",addProduct)
productRouter.delete("/delete/:id",deleteProductById)


module.exports = {productRouter}