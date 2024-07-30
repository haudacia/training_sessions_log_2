import express from 'express';
import userRouter from './routes/user.js';
import trainingSessionRouter from './routes/trainingSession.js'

const router = express.Router();
router.use('/trainingSession', trainingSessionRouter);
// router.use('/user', userRouter);

export default router;