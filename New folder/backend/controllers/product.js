const productModel = require("../models/proudectSchema")
const userModel =require("../models/userSchema")


//use userEffect to call each category +call products 
//add product -delete - update
//............Admin features...........................
const addProduct = (req,res)=>{//Done
    const {
        price,
        name,
        category,
        picture,
        description,
        size,
        color} = req.body
        const newProduct = new productModel({
            price,
            name,
            category, 
            description,
            picture,
            likes:0,
            rate:0,
            size,
            color
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
    const {id} = req.params
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
    const {id} = req.params //product id 
    const {quantity,size,color}= req.body
    console.log("qqqq",quantity);
    
        //update
        userModel.findOneAndUpdate({_id:req.token.userId,"card.element":id,"card.size":size,"card.color":color},{$inc:{'card.$.quantity':quantity }})
        .then((result)=>{
            if(result){
                console.log(result);
                
                res.json({"result":result.card,
                    message:"the product number increase"
                })
            }
            else{
                userModel.findByIdAndUpdate({_id:req.token.userId},{$push:{card:{element: id, quantity: quantity,size:size,color:color}}})
                .then((result)=>{
                    res.json({"result":result.card,
                        message:"the product add to your card"
                    })
                })
                .catch((err)=>{
                    res.json(err)
                })
            }
        })
        .catch((err)=>{
            res.json({"err":err})
        })
/*  console.log(userId);
    
    console.log(userId,id) */
    //find by id the user 
    //check if user.card have id 
    //if dont update +push
    //find use 
    //from result check if the product already exist in the card 
    //if it is update the quantity of the product 
    //else add that product //insert one to the card ==> with its quantity 
}

//get card of specific id 
const getCardByUserId = (req,res)=>{//Done
    const {id} =req.params 
    userModel.findById({_id:id})
     .populate("card.element") 
    .then((result)=>{
        if(result){
            console.log(result);
            
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
const deleteFromCardByproductId = (req,res)=>{//Done 
    //product id
    const {id} = req.params
    //user id to get card
    const{userId}= req.token
    userModel.findOneAndUpdate({_id:userId},{$pull:{card:{element:id}}})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
}

const updateCardElement = (req,res)=>{
    const {size,quantity,color} = req.body
    const {id} = req.params //productId
    
    console.log( "token",req.token.userId); 
    console.log(size,quantity,color);
    
    
    if(size && quantity && color){
        userModel.findOneAndUpdate({_id:req.token.userId,"card.element":id},{"card.$.quantity": quantity,"card.$.size":size,"card.$.color":color})
        .then((result)=>{
            res.json({result:result, message:"the product has been updated"})

        })
        .catch((error)=>{
            res.json(error)

        })
    }
    else{
        res.json("no updated active happened on product")
    }
    


}


//.....................favCard feature............
//addToFavById ==>product and get card by token
//Add to favorite
const addToFav = (req,res)=>{ //Done
    const {id} = req.params
    const{userId} = req.token
    console.log(userId);
    console.log(userId,id)
    userModel.findOne({favoriteList:id})
    .then((result)=>{
        if(!result){
            userModel.findByIdAndUpdate({_id:userId},{$push:{favoriteList:id}})
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
//get favList for specific user
const getFavByUserId = (req,res)=>{//Done
    const {id} = req.params 
    userModel.findById({_id:id})
    .populate("favoriteList").exec()
    .then((result)=>{
        
        
        if(result){
            if(result.favoriteList.length === 0){
                res.json({
                    result:"no item in your favorite card"
                })
            }
            else{
                res.json({result:result,
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


//remove from Favorite
const deleteFromFavCardByproductId = (req,res)=>{//Done 
    //product id
    const {id} = req.params
    //user id to get card
    const{userId}= req.token
    userModel.findByIdAndUpdate({_id:userId},{$pull:{favoriteList:id}})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
}
//removeFromFavById==>product and get card by token
//..............like feature.......................
//use mongoose methods +_
//send idProduct via ==params 
   //key==>0 dislike remove -1 1 ==>add 1
const likeFeature = (req,res)=>{ //Done
    const {id} = req.params
    const{likeValue} =req.body
    //likeValue ==>1 like or -1 dislike
        productModel.findByIdAndUpdate({_id:id},{$inc:{likes:likeValue}})
        .then((result)=>{
            res.json(result)
        })
}
//getAll like for specific product ==>use effect on[likes]
const getAllLikeByProductId = (req,res)=>{ //Done
    const{id} =req.params
    productModel.findById({_id:id})
    .then((result)=>{
        res.json({
            result:result.likes //save in variable or state
        })
    }).catch((error)=>{
        res.json(error)
    })
}
//get rate of specific product 


module.exports = {getProductsByCategoryId,
    addProduct,deleteProductById,
    updateProduct,getProductsById,
    getAllProducts,addTOCard,
    getCardByUserId,addToFav,
    deleteFromCardByproductId,
    getFavByUserId,deleteFromFavCardByproductId,
    updateCardElement,
    likeFeature,getAllLikeByProductId}