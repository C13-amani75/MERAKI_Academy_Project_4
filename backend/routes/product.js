const express = require("express")
const productRouter = express.Router()
const {addProduct,deleteProductById,updateProduct,getProductsById,getAllProducts} = require("../controllers/product")

productRouter.post("/create",addProduct)
productRouter.delete("/delete/:id",deleteProductById)
productRouter.put("/update/:id",updateProduct)
productRouter.get("/", getAllProducts)
productRouter.get("/:id", getProductsById)





module.exports = {productRouter}