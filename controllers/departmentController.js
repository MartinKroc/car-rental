const Department = require('../models/Department');

exports.department_list = async (req,res) => {
    try{
        const departments = await Department.find();
        res.json(departments);
    } catch (err){
        res.json({message: err})
    }
}

exports.department_detail_get = async (req,res) => {
    try{
        const departments = await Department.find();
        res.json(departments);
    } catch (err){
        res.json({message: err})
    }
}

exports.department_create_post = async (req,res) => {
    const department = new Department({
        name: req.body.name,
        geoLoc: req.body.geoLoc,
        description: req.body.description,
        photo: req.body.photo,
        cars: req.body.cars
    });
    try {
        const savedDep = await department.save()
        res.json(savedDep);
    } catch (err){
        res.json({message: err})
    }
}