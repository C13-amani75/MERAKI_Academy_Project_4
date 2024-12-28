const productModel = require("../models/proudectSchema")

//use userEffect to call each category +call products 
//add product -delete - update
//............Admin features...........................
const addProduct = (req,res)=>{
    const {categoryName,likes,
        rate,picture,description,size,color} = req.body
        const newProduct = new productModel({
            categoryName,likes,rate,
            picture,description,size,color
        })
        newProduct
        .save()
        .then((result)=>{
            if(!result){
                res.json("no adding occur")
            }
            res.status(201).json({
                success:true,
                result:result
            })
        })
        .catch((err)=>{
            res.json(err)
        })
}
const deleteProductById =(req,res)=>{
        const {id}= req.params
        productModel.deleteOne({id})
        .then((result)=>{
            res.json(result)
    
        })
        .catch((err)=>{
            res.json(err)
        })
}
const updateProduct = (req,res)=>{
    const {id}= req.params
    const elements = req.body
        productModel
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
const getProductsById =(req,res)=>{
    const {id} = req.params
    productModel.findById({_id:id})
    .then((result)=>{
        if(!result){
            res.status("404").json({
                success:false,
                message:"no product found"
            })

        }
            res.status(200).json({
                success:true,
                message:"the product found ",
                result:result
            })
    })
    .catch((err)=>{
        res.json(err)
    })
}
const getAllProducts =(req,res)=>{
    productModel.find({})
    .then((result)=>{
        if(!result){
            res.status("404").json({
                success:false,
                message:"no product added yet"
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
//.....................user features....................................


//likes -remove -add
//add to card -remove
//favorite -add-remove
//rate by start-add-remove-remove rate 
//product rate 
//click on category -see product and its feature 


//get product depending on hte name of category

module.exports = {addProduct,deleteProductById,updateProduct,getProductsById,getAllProducts}