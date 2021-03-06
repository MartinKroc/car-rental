const express = require('express')
const router = express.Router();
const Rental = require('../models/Rental')

router.get('/',(async (req, res) => {
    try{
        const rentals = await Rental.find();
        res.json(rentals);
    } catch (err){
        res.json({message: err})
    }
}));

router.post('/',async (req, res) => {
    const rental = new Rental({
        since: req.body.since,
        to: req.body.to,
        totalPrice: req.body.totalPrice,
        pickupPlace: req.body.pickupPlace,
        returnPlace: req.body.returnPlace,
        userId: req.body.userId
    });
    try {
        const savedDep = await rental.save()
        res.json(savedDep);
    } catch (err){
        res.json({message: err})
    }
});

module.exports = router;