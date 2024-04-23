const express = require('express');
const router = express.Router();
const userApiController = require ('../../controllers/api/userApiController')




//API Users
router.get('/users', userApiController.list)
router.get('/users/:id', userApiController.userById)




module.exports = router;