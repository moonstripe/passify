const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const authRoutes = require('./authRoutes');
const pwnedRoutes = require('./pwnedRoutes');
// /api/users
router.use('/api', apiRoutes);
router.use('/auth', authRoutes);
router.use('/pwned', pwnedRoutes);

module.exports = router;
