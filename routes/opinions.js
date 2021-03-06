const express = require('express')
const router = express.Router();
const Opinion = require('../models/Opinion')

router.get('/',(async (req, res) => {
    try{
        const opinions = await Opinion.find();
        res.json(opinions);
    } catch (err){
        res.json({message: err})
    }
}));

router.post('/',async (req, res) => {
    const opinion = new Opinion({
        content: req.body.content,
        stars: req.body.stars,
        carId: req.body.carId
    });
    try {
        const savedDep = await opinion.save()
        res.json(savedDep);
    } catch (err){
        res.json({message: err})
    }
});

module.exports = router;