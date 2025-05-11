const express = require('express');
const { registerUser, authUser, allUsers } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
<<<<<<< HEAD
const { verifyOtp, sendOtp } = require('../controllers/otpController');
=======
>>>>>>> 83b3c62f871021a5988bdf29fe2b3e6b0fd89947
const router = express.Router()



router.route('/').post(registerUser) .get(protect,allUsers)
router.post('/login',authUser)
<<<<<<< HEAD
router.post("/sendotp", sendOtp)
router.post("/verifyotp", verifyOtp)
=======

>>>>>>> 83b3c62f871021a5988bdf29fe2b3e6b0fd89947
module.exports=router;