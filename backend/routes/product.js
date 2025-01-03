/* 
 */const express = require("express")
const productRouter = express.Router()
const authentication =require("../middleware/authentication")
const authorization =require("../middleware/authorization")
const {addProduct,deleteProductById,
    updateProduct,getProductsById,
    getAllProducts,addTOCard,
    getCardByUserId,getProductsByCategoryId,
    deleteFromCardByproductId,
    addToFav,getFavByUserId,
    deleteFromFavCardByproductId,
    likeFeature,
    getAllLikeByProductId} = require("../controllers/product")


productRouter.post("/create",addProduct)
productRouter.delete("/delete/:id",deleteProductById)
productRouter.put("/update/:id",updateProduct)
productRouter.get("/", getAllProducts)
productRouter.get("/:id", getProductsById)
productRouter.put("/card/:id",authentication,addTOCard)
productRouter.get("/card/:id",getCardByUserId)
productRouter.delete("/card/:id",authentication,deleteFromCardByproductId)
productRouter.get("/category/:id",getProductsByCategoryId)
productRouter.post("/favorite/:id",authentication,addToFav)
productRouter.get("/favorite/:id",getFavByUserId)
productRouter.delete("/favorite/:id",authentication,deleteFromFavCardByproductId)
productRouter.post("/like/:id",likeFeature)
productRouter.get("/like/:id",getAllLikeByProductId)

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
get product of specific category 
http://localhost:5000/product/category/:id





 */

module.exports = {productRouter}