const express = require('express')
const router = express.Router();
const Role = require('../models/Role')

router.get('/',(async (req, res) => {
    try{
        const roles = await Role.find();
        res.json(roles);
    } catch (err){
        res.json({message: err})
    }
}));

router.post('/',async (req, res) => {
    const role = new Role({
        name: req.body.name
    });
    try {
        const savedDep = await role.save()
        res.json(savedDep);
    } catch (err){
        res.json({message: err})
    }
});
module.exports = router;