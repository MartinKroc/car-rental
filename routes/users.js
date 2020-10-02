const express = require('express')
const router = express.Router();
const User = require('../models/User')

router.get('/',(async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    } catch (err){
        res.json({message: err})
    }
}));

router.post('/',async (req, res) => {
    const user = new User({

    });
    try {
        const savedDep = await role.save()
        res.json(savedDep);
    } catch (err){
        res.json({message: err})
    }
});

module.exports = router;