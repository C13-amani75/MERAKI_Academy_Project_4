const {addCategory,deleteCategoryById,
    updateCategory,
    getAllCategories,
    getCategoryById} = require("../controllers/category")
const express = require("express")
const categoryRouter = express.Router()
const authentication =require("../middleware/authentication")
const authorization =require("../middleware/authorization")
categoryRouter.post("/create",addCategory)
categoryRouter.delete("/delete/:id",deleteCategoryById)
categoryRouter.put("/update/:id",updateCategory)
categoryRouter.get("/", getAllCategories)
categoryRouter.get("/:id", getCategoryById)

module.exports = {categoryRouter}

/* 
post
http://localhost:5000/category/create
delete
http://localhost:5000/category/delete/:id
update =put
http://localhost:5000/category/update/:id
get
http://localhost:5000/category/update/:id
http://localhost:5000/category/update/


*/

