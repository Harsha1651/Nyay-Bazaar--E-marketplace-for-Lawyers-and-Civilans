import express from 'express';
import { verifyToken } from '../utils/auth.js';

const router = express.Router();

router.get('/', (req, res) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    const user = verifyToken(token);

    if (user) {
      res.json(user);
    } else {
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(401);
  }
});

export default router;