const router = require('express').Router();

const {
    findLoginsByLoggedInUserApi,
    findLoginByIdApi,
    findAllLoginsApi,
    insertLoginApi,
    deleteLoginByIdFromDb,
} = require('../../../controllers/loginController');

const authMiddleware = require('../../../middlewares/authorizationMiddleware');

router.use(authMiddleware);


// /api/logins
router.route('/')
    .get(findLoginsByLoggedInUserApi)
    .post(insertLoginApi);


//  /api/logins/:loginId
router.route('/:loginId')
    .get(findLoginByIdApi)
    .delete(deleteLoginByIdFromDb);

module.exports = router;
