import express from 'express';
import { register, login } from '../controllers/user.controller';
import validate from '../middlewares/validate';
import userValidator from '../validators/user.validator';

const router = express.Router();

router.post('/register', validate(userValidator.register), register);
router.post('/login', validate(userValidator.login), login);

export default router;
