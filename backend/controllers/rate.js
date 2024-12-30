const rateModel = require("../models/rateSchema");

//call this method 
/* const createRate = (req,res)=>{
    const {productId} = req.params
    const {userId} = req.token
    const {rate} = req.body
    const newRole = new rateModel({
        userId,
        productId,
        rate
    })
    rate
} */

const rateProductById = (req,res)=>{
    console.log(444);
    const {productId} = req.params
     /* const{userId} =req.token  */
    const {rate} = req.body
    /* 
    const {productId} = req.params //productId
    const {userId} = req.token
    const {rate} = req.body */
    //check if the user already rate && the rate value is already the same 
    //if the user updated and the same value ==> no change .
    //if the user updated and the value is not the same.=>change rating value,
    //useEffect 
    rateModel.findOne({productId:productId})
    .then((result)=>{
        console.log(req.token);
        
        if(!result){
            const newRate = new rateModel({
                productId,
                rate
            })
            newRate.save()
            .then((result)=>{
                res.json(result)
            })
            .catch((error)=>{
                res.json("error1",error)

            })
        }
        else{
            console.log(result)
            res.json("rate")
        }
    })
    .catch((error)=>{
        res.json(error)
    })
}

module.exports = {rateProductById}