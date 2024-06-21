import express from 'express';

const router = express.Router();

router.use('/', (req, res) => {
  console.log('HW!');
});

export default router;
