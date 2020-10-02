const Rental = require('../models/Rental');

exports.rental_list = async (req,res) => {
    try{
        const rentals = await Rental.find();
        res.json(rentals);
    } catch (err){
        res.json({message: err})
    }
}

exports.rental_create_post = async (req,res) => {
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
}