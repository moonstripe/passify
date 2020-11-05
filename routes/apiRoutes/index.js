const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const userRoutes = require('./userRoutes');

// Setup your routes for /api/something here
// This line of code makes it so that /api/fweets is prepended to fweetRoutes
// example route.use('/myRoute', myRoutes);

// This line of code makes it so that /api/logins is prepended to loginRoutes
router.use('/logins', loginRoutes);
// This line of code makes it so that /api/users is prepended to userRoutes
router.use('/users', userRoutes);

module.exports = router;
