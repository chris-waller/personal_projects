// npm imports
import express from 'express';

// services
import LoginService from '../_services/LoginService';

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
  const results = LoginService.userLogin(username, password);
  if (results.errors.length > 0) {
    console.log('User login failed: ', results.errors);
    res.status(500).send('Failed to login.');
    return;
  }

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    success: true,
  }));
});

export default router;
