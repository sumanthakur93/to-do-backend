const express = require('express')
const {verifyUser} = require('../middleware/requireAuth')
const {loginUser, registerUser, getUser}  = require('../controller/userController')

const router = express.Router();


router.post('/profile', verifyUser, loginUser);
router.post('/register', registerUser);
router.post('/getuser', getUser)


module.exports = router;