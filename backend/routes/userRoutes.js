import express  from "express";
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from "../controllers/userController.js";
const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
// router.get('/profile', getUserProfile);
// router.put('/profile', updateUserProfile);
router.route('/profile').get(getUserProfile).put(updateUserProfile); //chaining

export default router;
