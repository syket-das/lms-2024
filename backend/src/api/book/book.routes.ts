import express, { Request, Response, NextFunction, Router } from 'express';
import middlewares from '../../middlewares';
import { findUserById } from '../user/user.services';
import { Role } from '@prisma/client';
import {
  createBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} from './book.services';
const router = express.Router();

router.post(
  '/add',
  middlewares.isAuthenticated,
  async (req: any, res: Response, next: NextFunction) => {
    try {
      const {
        name,
        description,
        author,
        language,
        image,
        bookCount,
        categoryId,
      } = req.body;
      const { id: userId } = req.payload;

      if (
        !name ||
        !description ||
        !author ||
        !language ||
        !image ||
        !bookCount
      ) {
        return res.status(400).json({
          success: false,
          message:
            'Missing required fields: name, description, author, language, image, bookCount',
        });
      }

      const userExist = await findUserById(userId);

      if (!userExist || userExist.role !== Role.ADMIN) {
        return res.status(400).json({
          success: false,
          message: 'You are not authorized to create a book ',
        });
      }

      const createdBook = await createBook({
        name,
        description,
        author,
        language,
        image,
        bookCount,
        categoryId,
      });

      return res.json({
        success: true,
        data: createdBook,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    const book = await getBook(id);

    return res.json({
      success: true,
      data: book,
    });
  } catch (error) {
    next(error);
  }
});

router.put(
  '/:id',
  middlewares.isAuthenticated,
  async (req: any, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const {
      name,
      description,
      author,
      language,
      image,
      bookCount,
      categoryId,
    } = req.body;

    const { id: userId } = req.payload;

    try {
      const userExist = await findUserById(userId);

      if (!userExist || userExist.role !== Role.ADMIN) {
        return res.status(400).json({
          success: false,
          message: 'You are not authorized to update a book ',
        });
      }

      const updatedBook = await updateBook(id, {
        name,
        description,
        author,
        language,
        image,
        bookCount,
        categoryId,
      });

      return res.json({
        success: true,
        data: updatedBook,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  middlewares.isAuthenticated,
  async (req: any, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { id: userId } = req.payload;

    try {
      const userExist = await findUserById(userId);

      if (!userExist || userExist.role !== Role.ADMIN) {
        return res.status(400).json({
          success: false,
          message: 'You are not authorized to delete a book ',
        });
      }

      await deleteBook(id);

      return res.json({
        success: true,
        message: 'Delete book successfully',
      });
    } catch (error) {
      next(error);
    }
  }
);

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  let category = req.query.category as string | null;

  if (category === 'all') {
    category = null;
  }

  try {
    const books = await getBooks({
      category: category || null,
      name: (req.query.name as string) || null,
    });

    let availableCopiesForBooks: any = [];

    books.forEach((book) => {
      const activeTransactions = book.BookTransaction.filter(
        (transaction) => transaction.status === 'ACTIVE'
      );

      const availableCopies = book.bookCount - activeTransactions.length;

      availableCopiesForBooks.push({
        ...book,
        availableCopies,
      });
    });

    return res.json({
      success: true,
      data: availableCopiesForBooks,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
