
const jwt =require("jsonwebtoken")

const authentication = (req,res,next)=>{
    try{
        //check if there is any token found ether it is valid or not
        if(!req.headers.authorization){
        res.status(403).json({message:"forbidden",
            success:false
        })
    }
    //if its found 
    //check if that token valid 
        const token = req.headers.authorization.split(" ").pop()
        jwt.verify(token,process.env.SECRET_KEY,(error , payload)=>{
        if(err){
            res.status(403).json({
                success:false,
                message:"this token is invalid or expired"})
        }
        //result ==>payload
        console.log(payload);
        
        req.token =payload
        next()
})
}
catch(err){
    res.json(err)
}
}
module.exports = authentication 