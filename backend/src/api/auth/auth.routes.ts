import express, { Request, Response, NextFunction, Router } from 'express';
import bcrypt from 'bcrypt';
import { createUser, findUserByEmail } from '../user/user.services';
import generateToken from '../../utils/generateToken';

const router = express.Router();

router.post(
  '/login',
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all fields',
      });
    }

    try {
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
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/register',
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, username, phone, password } = req.body;

    if (!name || !email || !username || !phone || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all fields',
      });
    }

    try {
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
    } catch (error) {
      next(error);
    }
  }
);

export default router;
