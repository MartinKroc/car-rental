const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Validation
const Joi = require('@hapi/joi');
const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    age: Joi.number().min(1).required()
});
const schemaLogin = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
});

exports.user_list = async (req,res) => {
    try{
        const users = await User.find();
        res.json(users);
    } catch (err){
        res.json({message: err})
    }
}

exports.user_create_post = async (req,res) => {

    const {error} = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send("user exists");

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPass,
        age: req.body.age
    });
    try {
        const savedUser = await user.save()
        res.send({user: user._id});
    } catch (err) {
        res.json({message: err})
    }
}

exports.user_login = async(req,res) => {
    const {error} = schemaLogin.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const usr = await User.findOne({email: req.body.email});
    if(!usr) return res.status(400).send("email not exist");

    const validPass = await bcrypt.compare(req.body.password,usr.password);
    if(!validPass) return res.status(400).send("invalid pass");

    const token = jwt.sign({_id: usr._id}, process.env.TOKEN_SECRET)
    res.header('auth-token',token).send(token);
}
