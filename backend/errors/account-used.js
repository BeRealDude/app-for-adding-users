class AccountUsed extends Error {
    constructor(message) {
      super(message);
      this.message = 'Пользователь с этой почтой уже существует!'
      this.statusCode = 409;
    }
  }
  
  module.exports = AccountUsed;