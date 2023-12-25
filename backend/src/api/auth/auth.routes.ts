import express, { Request, Response, NextFunction, Router } from 'express';
import bcrypt from 'bcrypt';
import { createUser, findUserByEmail } from '../user/user.services';
import generateToken from '../../utils/generateToken';

const router = express.Router();

router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const userExist = await findUserByEmail(email);

  if (!userExist) {
    return res.status(401).json({
      success: false,
      message: 'Invalid credentials ',
    });
  }

  const passwordMatch = await bcrypt.compare(password, userExist.password);

  if (!passwordMatch) {
    return res.status(401).json({
      success: false,
      message: 'Invalid credentials ',
    });
  }

  return res.json({
    success: true,
    token: generateToken(userExist.id),
  });
});

router.post('/register', async (req: Request, res: Response) => {
  const { name, email, username, phone, password } = req.body;

  const userExist = await findUserByEmail(email);

  if (userExist) {
    return res.status(401).json({
      success: false,
      message: 'User already exist',
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const createdUser = await createUser({
    email,
    name,
    username,
    phone,
    password: hashedPassword,
  });

  return res.json({
    success: true,
    token: generateToken(createdUser.id),
  });
});

export default router;
