const router = require('express').Router();
const { getUser, createUser } = require('../controllers/users');

router.get('/users', getUser);
router.post('/users', createUser);

module.exports = router;