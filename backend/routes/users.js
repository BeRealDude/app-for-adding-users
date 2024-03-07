const router = require('express').Router();
const NotFoundError = require('../errors/page-not-found.js');
const { getUser, createUser, updateUser, deleteUser } = require('../controllers/users');

router.get('/users', getUser);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

router.use((req, res, next) => {
    next(new NotFoundError('Страница не найдена'));
  });

module.exports = router;