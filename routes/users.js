var express = require('express');
var router = express.Router();
const userControllers=require('../controllers/users.controllers');
/* GET users listing. */
router.post('/all',userControllers.getAll);
router.get('/alldept',userControllers.getDeptWiseUsers);

router.post('/create',userControllers.createUser);
router.post('/update/:id',userControllers.updateUser);
router.post('/find/:id',userControllers.findUser);
router.post('/delete/:id',userControllers.deleteUser);

module.exports = router;
