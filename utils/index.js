const { createJWT, isValidToken, attachedCookiesToResponse } = require('./jwt');

const createTokenUser = require('./createTokenUser');
const checkPermissions = require('./checkPremissions');

module.exports = {
  createJWT,
  isValidToken,
  attachedCookiesToResponse,
  createTokenUser,
  checkPermissions,
};
