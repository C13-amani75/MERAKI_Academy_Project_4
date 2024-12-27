const {addCategory,deleteCategory} = require("../controllers/category")
const express = require("express")
const categoryRouter = express.Router()

categoryRouter.post("/create",addCategory)
categoryRouter.delete("/delete",deleteCategory)


module.exports = {categoryRouter}

