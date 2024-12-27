const {addCategory,deleteCategoryById} = require("../controllers/category")
const express = require("express")
const categoryRouter = express.Router()

categoryRouter.post("/create",addCategory)
categoryRouter.delete("/delete/:id",deleteCategoryById)


module.exports = {categoryRouter}

