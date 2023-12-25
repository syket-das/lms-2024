import express, { Express } from 'express';
import auth from './auth/auth.routes';
import user from './user/user.routes';
import book from './book/book.routes';
import category from './category/category.routes';
import bookTransaction from './bookTransaction/bookTransaction.routes';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/auth', auth);
router.use('/user', user);
router.use('/book', book);
router.use('/category', category);
router.use('/bookTransaction', bookTransaction);

export default router;
