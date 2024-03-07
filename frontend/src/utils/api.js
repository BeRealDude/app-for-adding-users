const BASE_URL = "https://app-for-adding-users.vercel.app";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

export function addUser(info) {
  return fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      surname: info.surname,
      name: info.name,
      patronymic: info.patronymic,
      email: info.email,
      login: info.login,
    }),
  }).then((res) => checkResponse(res));
}

export function getUsers() {
  return fetch(`${BASE_URL}/users`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => checkResponse(res))
    .then((user) => user);
}

export function updateUser(info) {
  return fetch(`${BASE_URL}/users/${info._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      surname: info.surname,
      name: info.name,
      patronymic: info.patronymic,
      email: info.email,
      login: info.login,
    }),
  }).then((res) => checkResponse(res));
}

export function deleteUser(info) {
  return fetch(`${BASE_URL}/users/${info._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => checkResponse(res));
}
