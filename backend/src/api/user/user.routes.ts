import express from 'express';
import { allUsers, findUserById } from './user.services';
import middlewares from '../../middlewares';
const router = express.Router();

router.get(
  '/profile',
  middlewares.isAuthenticated,
  async (req: any, res, next) => {
    try {
      const { id: userId } = req.payload;
      const user = await findUserById(userId);

      if (!user) {
        return next(new Error('User not found'));
      }

      return res.json({
        success: true,
        data: user,
      });
    } catch (err) {
      next(err);
    }
  }
);

router.get('/', middlewares.isAuthenticated, async (req: any, res, next) => {
  try {
    const users = await allUsers();

    if (!users) {
      return next(new Error('Users not found'));
    }

    return res.json({
      success: true,
      data: users,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
