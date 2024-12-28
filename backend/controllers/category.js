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
}
//------------------------------------------------------------------------
const updateCategory = (req,res)=>{
    const {id}= req.params
        const elements = req.body
            categoryModel
            .findByIdAndUpdate({_id:id},elements,{new:true})
            .then((result)=>{
                if(!result){
                    res.json({
                        success:false,
                        message:"no updated occur"
                    })
                }
                res.status(200).json({
                    success:true,
                    result:result,
                    message:"the products updated successfully"
                })
            })
            .catch((err)=>{
                res.json(err)
    
            })

}
//-------------------------------------------------------------

//click on specific specific category call  products 
const getAllCategories =(req,res)=>{
    categoryModel.find({})
    .then((result)=>{
        if(!result){
            res.status("404").json({
                success:false,
                message:"no category created yet"
            })
            
        }
        res.status(200).json({
            success:true,
            message:"the process success",
            result:result

        })

    })
    .catch((err)=>{
        res.json(err)

    })


}
const getCategoryById = (req,res)=>{
    const {id} = req.params
        categoryModel.findById({_id:id})
        .then((result)=>{
            if(!result){
                res.status("404").json({
                    success:false,
                    message:"no category found"
                })
            }
                res.status(200).json({
                    success:true,
                    message:"the category found ",
                    result:result
        
                })
        })
        .catch((err)=>{
            res.json(err)
    
        })

}






//user effect to get all product in specific page

module.exports = ({
    addCategory,
    deleteCategoryById,
    updateCategory,
    getAllCategories,
    getCategoryById
})
