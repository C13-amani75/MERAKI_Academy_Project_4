const categoryModel = require("../models/categorySchema")


//create category collection - delete category ,-->admin 
  //bags,hijab,pants,dress
 //post->each category ==> pages

 const addCategory = (req,res)=>{
    const{name,image} = req.body

    if(name && image){
        const newCategory = new categoryModel({
            name,
            image
        })
        newCategory
        .save()
        .then((result)=>{
            res.status(201).json({
            success:true,
            name:result.name,
            image:result.image
        })

        })
        .catch((err)=>{
            res.json(err)
        })

        
    }
    res.status().json
} 
//-----------------------------------------------------------------------

const deleteCategoryById = (req,res)=>{



}
//user effect to get all product in specific page

module.exports = ({
    addCategory,
    deleteCategory
})
