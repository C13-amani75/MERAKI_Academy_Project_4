const productModel = require("../models/proudectSchema")

//use userEffect to call each category
//add product 
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
//.........................................................
const deleteProductById =(req,res)=>{
    

}
//delete product
/* const addProduct =(req,res)=>{
} */
//get product depending on hte name of category

module.exports = {addProduct,deleteProductById}