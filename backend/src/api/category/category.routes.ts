import express, { Request, Response, NextFunction, Router } from 'express';
import {
  createCategory,
  getCategories,
  getCategory,
} from './category.services';

import middlewares from '../../middlewares';
import { Role } from '@prisma/client';
import { findUserById } from '../user/user.services';

const router = express.Router();

router.post(
  '/create',
  middlewares.isAuthenticated,
  async (req: any, res: Response, next: NextFunction) => {
    const { name } = req.body;
    const { id: userId } = req.payload;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name',
      });
    }

    try {
      const userExist = await findUserById(userId);

      if (!userExist || userExist.role !== Role.ADMIN) {
        return res.status(400).json({
          success: false,
          message: 'You are not authorized to create a category ',
        });
      }

      const createdCategory = await createCategory({ name });

      return res.json({
        success: true,
        data: createdCategory,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    const category = await getCategory(id);

    return res.json({
      success: true,
      data: category,
    });
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await getCategories();

    return res.json({
      success: true,
      data: categories,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
