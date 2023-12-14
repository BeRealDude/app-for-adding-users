const router = require('express').Router();
const { getUser, createUser, updateUser, deleteUser } = require('../controllers/users');

router.get('/users', getUser);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);


module.exports = router;