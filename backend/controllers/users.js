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
