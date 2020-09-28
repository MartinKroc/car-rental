var express = require('express')
var router = express.Router();
const Car = require('../models/Car')
const Department = require('../models/Department')

router.get('/', (async (req, res) => {
    // Create an instance of model SomeModel
/*    var awesome_instance = new Car({ brand: 'awesome', description: 'sss', year: 2222, car_type: 'Osobowe' });

// Save the new model instance, passing a callback
    awesome_instance.save(function (err) {
        if (err) return {message: err};
        // saved!
    });
*/
    let DepartmentInit = new Department({
        geoloc: 'aaaa',
        description: 'lotnisko',
        photo: 'sasd'
    });


/*    try{
        const cars = await Car.find();
        res.json(cars);
    } catch (err){
        res.json({message: err})
    }*/
}));

module.exports = router;