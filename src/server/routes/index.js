import express from 'express'
import MyController from '../controllers/myController'
const ROUTER = express.Router();
const MY_CONTROLLER = new MyController();
ROUTER.get('/users', MY_CONTROLLER.names);
ROUTER.get('/greeting', MY_CONTROLLER.greet);
ROUTER.get('/users', MY_CONTROLLER.names);
ROUTER.get('/users/detail', MY_CONTROLLER.users);
ROUTER.get('/users/occupation', MY_CONTROLLER.findByOccupation);
ROUTER.get('/users/gender', MY_CONTROLLER.findByGender);
ROUTER.get('/users/youngest', MY_CONTROLLER.youngest);
ROUTER.get('/users/average', MY_CONTROLLER.average);

export default router;
