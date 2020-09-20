import express from 'express';

const router = express.Router();

/**
 * Download resume
 */
router.get('/download', (req, res) => {
  console.log('User has requested a resume download');
  const file = `${__dirname}/resume.pdf`;
  const fileName = 'Chris Waller - Full Stack Application Developer.pdf';
  res.download(file, fileName); // Set disposition and send it.
});

export default router;
