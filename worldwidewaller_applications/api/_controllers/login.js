// npm imports
import express from 'express';

// helpers
import ValidateParameters from './ValidateParameters';

const router = express.Router();

/**
 * User is attempting login.
 */
router.get('/:username/:password', (req, res) => {
  console.log('User is attempting to login with:', req.params);

  // ensure we have all of the required parameters to process a login
  const params = ['username', 'password'];
  const { username, password, errors } = ValidateParameters(params, req.params);

  if (errors.length > 0) {
    console.log('Failed to validate parameters:', errors);
    res.status(500).send('Failed to validate parameters. See API logs for details');
    return;
  }

  // simulate call to service layer
  console.log(`Calling service layer with ${username} and ${password}`);

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    success: true,
  }));
});

export default router;
