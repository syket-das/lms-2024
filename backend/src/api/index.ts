import express, { Express } from 'express';
import auth from './auth/auth.routes';
import user from './user/user.routes';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/auth', auth);
router.use('/user', user);

export default router;
