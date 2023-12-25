import express, { Request, Response, NextFunction, Router } from 'express';
import middlewares from '../../middlewares';
import { findUserById } from '../user/user.services';
import { Role, TransactionStatus } from '@prisma/client';
import {
  createBookTransaction,
  getBookTransactions,
  updateBookTransaction,
} from './bookTransaction.services';
const router = express.Router();

router.post(
  '/add',
  middlewares.isAuthenticated,
  async function (req: any, res: Response, next: NextFunction) {
    const { bookId, userId, type, fromDate, toDate } = req.body;
    const { id: userIdAuth } = req.payload;

    if (
      bookId === undefined ||
      userId === undefined ||
      type === undefined ||
      fromDate === undefined ||
      toDate === undefined
    ) {
      return res.status(400).json({ message: 'Missing fields' });
    }

    try {
      const userExist = await findUserById(userIdAuth);

      if (!userExist || userExist.role !== Role.ADMIN) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const bookTransaction = await createBookTransaction({
        bookId,
        userId,
        type,
        fromDate,
        toDate,
      });

      return res.status(201).json({
        success: true,
        data: bookTransaction,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/',
  middlewares.isAuthenticated,
  async function (req: any, res: Response, next: NextFunction) {
    const { id: userIdAuth } = req.payload;
    try {
      const userExist = await findUserById(userIdAuth);

      if (!userExist || userExist.role !== Role.ADMIN) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const bookTransactions = await getBookTransactions();

      return res.status(200).json({
        success: true,
        data: bookTransactions,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  middlewares.isAuthenticated,
  async function (req: any, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { bookId, userId, type, fromDate, toDate, status } = req.body;
    const { id: userIdAuth } = req.payload;

    try {
      const userExist = await findUserById(userIdAuth);

      if (!userExist || userExist.role !== Role.ADMIN) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const updatedBookTransaction = await updateBookTransaction(id, {
        bookId,
        userId,
        type,
        fromDate,
        toDate,
        status,
        returnedAt: status === TransactionStatus.RETURNED ? new Date() : null,
      });

      return res.status(201).json({
        success: true,
        data: updatedBookTransaction,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
