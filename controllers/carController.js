const Car = require('../models/Car');

exports.car_list = async (req,res) => {
    try{
        const cars = await Car.find();
        res.json(cars);
    } catch (err){
        res.json({message: err})
    }
}

exports.car_create_post = async (req,res) => {
    const car = new Car({
        brand: req.body.brand,
        description: req.body.description,
        year: req.body.year,
        car_type: req.body.car_type,
        availableNow: req.body.availableNow,
        priceForDay: req.body.priceForDay,
        photo: req.body.photo,
        departmentId: req.body.departmentId
    });
    try {
        const savedDep = await car.save()
        res.json(savedDep);
    } catch (err){
        res.json({message: err})
    }
}