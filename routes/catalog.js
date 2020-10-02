const express = require('express');
const router = express.Router();
const verify = require('./verifyJWT')

// REQUIRE CONTROLLER MODULES

const car_controller = require('../controllers/carController');
const department_controller = require('../controllers/departmentController');
const opinion_controller = require('../controllers/opinionController');
const rental_controller = require('../controllers/rentalController');
const role_controller = require('../controllers/roleController');
const user_controller = require('../controllers/userController');

// CAR ROUTES

router.post('/car/create',car_controller.car_create_post);
router.get('/cars',car_controller.car_list);

// DEPARTMENT ROUTES

router.post('/department/create',department_controller.department_create_post);
router.get('/departments',verify,department_controller.department_list);

// OPINION ROUTES

router.post('/opinion/create',opinion_controller.opinion_create_post);
router.get('/opinions',opinion_controller.opinion_list);

// RENTAL ROUTES

router.post('/rental/create',rental_controller.rental_create_post);
router.get('/rentals',rental_controller.rental_list);

// ROLE ROUTES

router.post('/roles',role_controller.role_list);

// USER ROUTES

router.post('/users/create',user_controller.user_create_post);
router.post('/users/login',user_controller.user_login);

module.exports = router;