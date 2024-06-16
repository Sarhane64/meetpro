const crypto = require("crypto");

const createPasswordResetToken = () => {
  const resetToken = crypto.randomBytes(32).toString('hex');

  const passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  const passwordResetExpires = Date.now() + 10 * 60 * 1000; // Expire in 10 minutes

  return { resetToken, passwordResetToken, passwordResetExpires };
};

module.exports = createPasswordResetToken;
