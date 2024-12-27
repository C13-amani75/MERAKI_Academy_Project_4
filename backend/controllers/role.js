
const roleModel = require("../models/roleSchema")

const createRole = (req,res)=>{
    console.log(req);

    //admin==>createCat-deleteCat-addPro-deletePro-
    const {roleName, permissions} = req.body
    console.log( roleName,permissions);
    
    const newRole = new roleModel({
        roleName,
        permissions
    })
    newRole
    .save()
    .then((result)=>{
        res.status(201).json({
            message:"the role created",
            result:result
        })
    })
    .catch((err)=>{
        res.json(err)
    }) 
}



module.exports = ({
    createRole
})