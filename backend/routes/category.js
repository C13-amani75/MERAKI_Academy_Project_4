const {addCategory,deleteCategoryById,
    updateCategory,
    getAllCategories,
    getCategoryById} = require("../controllers/category")
const express = require("express")
const categoryRouter = express.Router()

categoryRouter.post("/create",addCategory)
categoryRouter.delete("/delete/:id",deleteCategoryById)
categoryRouter.put("/update/:id",updateCategory)
categoryRouter.get("/", getAllCategories)
categoryRouter.get("/:id", getCategoryById)

module.exports = {categoryRouter}

