const rateModel = require("../models/rateSchema");
//addRate , updateRate , deleteRate,calculate rate of each product in frontend

const addRateByProductId =(req,res)=>{//Done ==>update + add
    console.log(req.token);
    const {userId} =req.token
    const{productId}= req.params
    const {rateValue} = req.body
    //check if the user already rate
      //if he rate and the value of rating the same ==>no change
      //if he rate and the value is not the same update the value and ==>useEffect update the total rate of this product
      //if he didnt rate ==>add new rate document
    rateModel.findOne({userId:userId,productId:productId})
    .then((result)=>{
        //if he didnt rate ==> add new rate document
        if(!result){
            const newRate = new rateModel({
                userId,
                productId,
                rateValue
            })
            newRate.save()
            .then((result)=>{
                res.json(result);
            })
            .catch((error)=>{
                res.json(error);
            })
        }
        else{
            //he is already rate 
             //check its rate value
            //if he rate and the value is not the same update the value and 
            // ==>useEffect update the total rate of this product
            console.log(typeof(result.rateValue),typeof(rateValue));
            
            if(result.rateValue === rateValue){
                res.json("you are already rated before  ")
            }
            else{
            rateModel.updateOne({_id:result._id},{rateValue:rateValue})
            .then((result)=>res.json(result))
            .catch((error)=>res.json(error))
        }
            }
    })
    .catch((error)=>{
        res.json(error)
    })
}

//check if the user already rate && the rate value is already the same 
    //if the user updated and the same value ==> no change .
    //if the user updated and the value is not the same.=>change rating value,
    //useEffect 

const deleteRateByProductId = (req,res)=>{ //Done
    const{productId}= req.params
    //if the user clicked on remove review 
     //get productId //userId 
     //update the value of rate to 0 ==>
        rateModel.findOneAndUpdate({productId:productId},{rateValue:0})
    .then((result)=>{
        res.json(result)
    })
    .catch((error)=>{
        res.json(error)
    })
}
module.exports= {
    addRateByProductId,
    deleteRateByProductId
}