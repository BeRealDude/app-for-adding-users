const serverErrors = {
  err409: "Пользователь с этой почтой уже существует!",
  err400: "Переданы некорректные данные!",
  err500: "Ошибка на сервере!",
};

export function handleServerError(err, setter) {
  switch (err) {
    case "Ошибка: 409":
      console.log(err, serverErrors.err409);
      setter(serverErrors.err409);
      break;
    case "Ошибка: 400":
      console.log(err, serverErrors.err400);
      setter(serverErrors.err400);
      break;
    default:
      console.log(err, serverErrors.err500);
      setter(serverErrors.err500);
      break;
  }
}
