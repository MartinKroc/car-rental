const Opinion = require('../models/Opinion');

exports.opinion_list = async (req,res) => {
    try{
        const opinions = await Opinion.find();
        res.json(opinions);
    } catch (err){
        res.json({message: err})
    }
}

exports.opinion_create_post = async (req,res) => {
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
}