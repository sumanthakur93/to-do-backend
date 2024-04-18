const express = require('express')
const {verifyUser} = require('../middleware/requireAuth')
const {getTask, removeTask, addTask, changeStatus}  = require('../controller/taskController')

const router = express.Router();

router.post('/addtask',verifyUser, addTask);
router.post('/removetask',verifyUser, removeTask);
// router.post('/gettask',verifyUser, getTask);

router.get('/raju', verifyUser, getTask);  
router.post('/update', verifyUser, changeStatus);



module.exports = router;