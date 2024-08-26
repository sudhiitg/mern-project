import express from 'express';
import { deleteUser, test, updateUser , getUserListings} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verufyUser.js';
import { signOut } from '../controllers/auth.controller.js';

const router =express.Router();

router.get('/test',test);
router.post('/update/:id',verifyToken, updateUser);
router.delete('/delete/:id',verifyToken,deleteUser);
router.get('/signout',signOut);
router.get('/listing/:id', verifyToken, getUserListings)
export default router ;