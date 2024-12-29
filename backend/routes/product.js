/* 
 */const express = require("express")
const productRouter = express.Router()
const authentication =require("../middleware/authentication")
const authorization =require("../middleware/authorization")
const {addProduct,deleteProductById,updateProduct,getProductsById,getAllProducts,addTOCard,getCardByUserId,deleteFromCardByproductId} = require("../controllers/product")

productRouter.post("/create",addProduct)
productRouter.delete("/delete/:id",deleteProductById)
productRouter.put("/update/:id",updateProduct)
productRouter.get("/", getAllProducts)
productRouter.get("/:id", getProductsById)
productRouter.put("/card:id",authentication,addTOCard)
productRouter.get("/card/:id",getCardByUserId)
productRouter.delete("/card/:id",authentication,deleteFromCardByproductId)
/* 
post:
http://localhost:5000/product/create
delete:
http://localhost:5000/product/delete/:id
put:
http://localhost:5000/product/update/:id
get:
http://localhost:5000/product/
http://localhost:5000/product/:id





 */

module.exports = {productRouter}