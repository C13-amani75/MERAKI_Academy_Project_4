const productModel = require("../models/proudectSchema")
const userModel =require("../models/userSchema")
const mongoose = require("mongoose");
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
//add to card /??????????
const addTOCard = (req,res)=>{
    //check if the product already in the card
    //onclick getid of that product into url 
    //search in user model 
    //push that is from url into card of that user
    const id = req.params.id
    const{userId} = req.token
    console.log(userId,id)
    userModel.findByIdAndUpdate({_id:userId},{$push:{card:id}})
    .then((result)=>{
        console.log(22)
        console.log(userModel);
        res.json(result)
    }).catch((error)=>{
        console.log(77);
        res.json(error)
    })
}

//get card of specific id 
const getCardByUserId = (req,res)=>{
    const {id} =req.params 
    userModel.findById({_id:id})
    .then((result)=>{
        if(result){
            if(result.card.length === 0){
                res.json({
                    result:"the card empty"
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
//card - remove


//favorite -add-remove

//likes -remove -add


//rate by start-add-remove-remove rate 
//product rate 
//click on category -see product and its feature 


//get product depending on hte name of category

module.exports = {addProduct,deleteProductById,updateProduct,getProductsById,getAllProducts,addTOCard,getCardByUserId,deleteFromCardByproductId}