import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/api/greeting', function(req, res, next) {
  res.send('respond with a resource');
});

export default router;
