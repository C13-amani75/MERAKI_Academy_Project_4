const categoryModel = require("../models/categorySchema")


//create category collection - delete category ,-->admin 
  //bags,hijab,pants,dress
 //post->each category ==> pages

 const addCategory = (req,res)=>{
    const{name,image} = req.body
    //check if category name already exist??????????

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
    else{
        res.json(err)
    }
    
} 
//-----------------------------------------------------------------------

const deleteCategoryById = (req,res)=>{
    const {id}= req.params
    categoryModel.deleteOne({id})
    .then((result)=>{
        res.json(result)

    })
    .catch((err)=>{
        res.json(err)

    })
//------------------------------------------------------------------------
//click on specific specific category call  products 





}
//user effect to get all product in specific page

module.exports = ({
    addCategory,
    deleteCategoryById
})
