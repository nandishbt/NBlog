import express from 'express';
import { registerUser } from '../controllers/user.controller.js';
import upload from '../middlewares/multer.middleware.js';

const router = express.Router();

router.route('/create').post(upload.fields([
    {name:'profile', maxCount:1},
    {name:'cover',maxCount:1},
]),registerUser)



export default router;