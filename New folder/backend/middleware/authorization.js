//take token and check permessions
//author==>take string 
const authorization = (permissionValue)=>{
    //return middleware function 
      //check if this permission value exist in payload
      //we used it after Athen middleware cox we saved payload into is 
    return (req,res,next)=>{
        const permissions = req.token.permissions
        console.log(permissions);
        
        if(req.token.permissions.includes(permissionValue)){
            next() 
        }
        res.status(403).json("forbidden ")
    }
}

module.exports = authorization