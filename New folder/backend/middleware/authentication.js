
const jwt =require("jsonwebtoken")

const authentication = async(req,res,next)=>{
    console.log("test")
    console.log(req.headers.authorization,"677777777");
    
    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ").pop()
    try{
        const verification = await jwt.verify(token,process.env.SECRET_KEY)
        req.token = verification
        next()
    }
    catch(error){
        console.log(error);
        
        res.json("token is invalid" )
    }

    
        
    }
    else{
        res.json("forbidden111")
    }

}



module.exports = authentication