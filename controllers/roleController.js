const Role = require('../models/Role');

exports.role_list = async (req,res) => {
    try{
        const roles = await Role.find();
        res.json(roles);
    } catch (err){
        res.json({message: err})
    }
}

exports.role_create_post = async (req,res) => {
    const role = new Role({
        name: req.body.name
    });
    try {
        const savedDep = await role.save()
        res.json(savedDep);
    } catch (err){
        res.json({message: err})
    }
}