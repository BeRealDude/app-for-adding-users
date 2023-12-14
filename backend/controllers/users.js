const mongoose = require('mongoose');
const User = require("../models/users");
const AccountUsed = require('../errors/account-used');
const PageNotFound = require('../errors/page-not-found');
const IncorrectData = require('../errors/incorrect-data');

module.exports.getUser = (req, res, next) => {
  User.find({})
    .then((users) => {
      if(users) return res.send(users)
      throw new PageNotFound('Пользователи не найдены');
    })
    .catch((err) => next(err));
};

module.exports.createUser = (req, res, next) => {
  const { surname, name, patronymic, email, login } = req.body;

  User.create({ surname, name, patronymic, email, login })
    .then((user) => {
      res
        .status(201)
        .send(user);
    })
    .catch((err) => {
      if (err.code === 11000) {
        console.log(err.name, 'имя ошибки')
        next(new AccountUsed(err.name, err.message));
      } 
      if (err instanceof mongoose.Error.ValidationError) {
        next(new IncorrectData('Переданы некорректные данные при создании пользователя'));
      } else {
        next(err);
      }
    });
};

module.exports.updateUser = (req, res, next) => {
  const { surname, name, patronymic, email, login } = req.body;
  const { id: idUser } = req.params;

  User.findByIdAndUpdate(idUser, { surname, name, patronymic, email, login }, { new: true, runValidators: true })
    .then((user) => {
      if (user) return res.send(user);
      throw new PageNotFound('Пользователь по указанному id не найден');
    })
    .catch((err) => {
      if (err.code === 11000) {
        return next(new AccountUsed('Аккаунт с этой почтой уже существует'));
      }

      if (err instanceof mongoose.Error.CastError) {
        return next(new IncorrectData('Передан некорректный id пользователя'));
      }

      if (err instanceof mongoose.Error.ValidationError) {
        return next(new IncorrectData('Переданы некорректные данные при обновлении пользователя'));
      }

      return next(err);
    });
};

module.exports.deleteUser = async (req, res, next) => {
  const { id: idUser } = req.params;
  try {
    const user = await User.findById(idUser);
    if (!user) throw new PageNotFound('Пользователь с указанным id не найден.');
    else {
      await user.deleteOne();
      res.send({ message: 'Пользователь удален.' });
    }
  } catch (err) {
    if (err instanceof mongoose.Error.CastError) {
      next(new IncorrectData('Указан некорректный id при удалении пользователя.'));
    } else { next(err); }
  }
  return true;
};
