import express from 'express';
import { deleteUser, getProfile, login, logout, registerUser, updateProfile, updateProfilePicture } from '../controllers/user.controller.js';
import upload from '../middlewares/multer.middleware.js';

const router = express.Router();

router.route('/register').post(upload.fields([
    {name:'profile', maxCount:1},
    {name:'cover',maxCount:1},
]),registerUser)

router.route('/login').post(login)
router.route('/profile').get(getProfile).put(updateProfile)
router.route('/avatar').put(updateProfilePicture)
router.route('/logout').get(logout)
router.route('/delete').post(deleteUser)





export default router;