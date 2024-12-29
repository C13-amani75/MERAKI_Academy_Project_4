const productModel = require("../models/proudectSchema")
const userModel =require("../models/userSchema")
const mongoose = require("mongoose");
//use userEffect to call each category +call products 
//add product -delete - update
//............Admin features...........................
const addProduct = (req,res)=>{//Done
    const {
        category,
        picture,
        description,
        size,
        color} = req.body
        const newProduct = new productModel({
            category,
            likes:0,
            rate:0,
            picture,
            description,
            size,color
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
const deleteProductById =(req,res)=>{ //Done
        const {id}= req.params
        productModel.deleteOne({_id:id})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.json({error:err,
                result:"no user deleted",
                success:false
            })
        })
}
const updateProduct = (req,res)=>{ //Done 
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
//............................userFeatures...................
const getProductsById =(req,res)=>{//Done
    const {id} = req.params
    productModel.findById({_id:id})
    .populate("category")
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
const getAllProducts =(req,res)=>{ //Done
    productModel.find({})
    .populate("category")
    .then((result)=>{
        if(result.length === 0){
            console.log(result);
            
            res.status("404").json({
                success:true,
                message:"no product added yet"
            })
        }
        else{
            console.log(result);
            
            res.status(200).json({
            success:true,
            message:"the process success",
            result:result
        })
        }
        
    })
    .catch((err)=>{
        res.json(err)
    })
}
//get product depending on category //Done 
const getProductsByCategoryId = (req,res)=>{
    const {id} =req.params
    productModel.find({category:id})
    .then((result)=>{
        res.json(result)

    }).catch((error)=>{
        res.json(error)
    })
}


//.....................card and user features....................................
//add to card /??????????
const addTOCard = (req,res)=>{ //Done
    //check if the product already in the card
    //onclick getId of that product into url 
    //search in user model 
    //push that is from url into card of that user
    const {id} = req.params
    const{userId} = req.token
    console.log(userId);
    
    console.log(userId,id)
    //find by id the user 
    //check if user.card have id 
    //if dont update +push
    userModel.findOne({card:id})
    .then((result)=>{
        if(!result){
            console.log(result);
            
            userModel.findByIdAndUpdate({_id:userId},{$push:{card:id}})
            .then((result)=>{
                res.json(result)
            })
        }
        else{
            res.json({
                success:false,
                message:"the product already exist"
            })
        }
    })
    .catch((result)=>{
        res.json(result)
    })
}

//get card of specific id 
const getCardByUserId = (req,res)=>{//Done
    const {id} =req.params 
    userModel.findById({_id:id})
    .then((result)=>{
        if(result){
            if(result.card.length === 0){
                res.json({
                    result:"no item in your card"
                })
            }
            else{
                res.json({result:result.card,
                "success":true
            })
            }
        }
        else{
            res.json("maybe you are not log in yet! or something wrong occur")
        }
    })
    .catch((error)=>{
        res.json(error)
    })
}
//delete from card
const deleteFromCardByproductId = (req,res)=>{
    //product id
    const {id} = req.params
    //user id to get card
    const{userId}= req.token
    userModel.updateOne({_id:userId},{$pull:{card:id}})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)

    })



}
//.....................favCard feature............
//addToFavById ==>product and get card by token

//removeFromFavById==>product and get card by token


//..............like feature.......................
//addLikeByProductId
//removeLikeByProductId



//rate by start-add-remove-remove rate 
//product rate 
//click on category -see product and its feature 


//get product depending on hte name of category

module.exports = {getProductsByCategoryId,
    addProduct,deleteProductById,
    updateProduct,getProductsById,
    getAllProducts,addTOCard,
    getCardByUserId,
    deleteFromCardByproductId}