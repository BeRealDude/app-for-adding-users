import React, { useState, useEffect, useId } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWindowCreateUser from "../ModalWindowCreateUser/ModalWindowCreateUser";
// import usersData from '../Utils/usersData'
import * as api from "../../utils/api";
import ModalWindowUpdateUser from "../ModalWindowUpdateUser/ModalWindowUpdateUser";

function App() {
  const [isModalWindowCreateUserOpen, setModalWindowCreateUserOpen] = useState(false);
  const [isMWUpdateUser, setMWUpdateUser] = useState(false);

  const serverErrors = {
    err409: "Пользователь с этой почтой уже существует!",
    err400: "Переданы некорректные данные при добавления пользователя",
  };

  const [textErr, setTextErr] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setTextErr("");
    }, 4000);
  }, [textErr]);

  const [users, setUsers] = useState([]);

  const [selectedUser, setSelectedUser] = useState({});

  function handleMWCreateUserClick() {
    setModalWindowCreateUserOpen(true);
  }
 

  function handleMWUpdateUserOpen(info) {
    setMWUpdateUser(true);
    setSelectedUser(info)
  }

  function closeAllModalWindows() {
    setModalWindowCreateUserOpen(false);
    setMWUpdateUser(false);
  }

  function addNewUser(info) {
    api
      .addUser(info)
      .then((info) => {
        setUsers([info, ...users]);

        // localStorage.setItem("newUsers", JSON.stringify(info));
        closeAllModalWindows();
      })
      .catch((err) => {
        if (err === "Ошибка: 409") {
          console.log(err, serverErrors.err409);
          setTextErr(serverErrors.err409);
        }
        if (err === "Ошибка: 400") {
          console.log(err, serverErrors.err400);
          setTextErr(serverErrors.err400);
        } else {
          console.log(err, "Ошибка на сервере");
        }
      });
  }

  function updateUser() {}

  useEffect(() => {
    //   const newUsers = JSON.parse(localStorage.getItem("newUsers"));
    //  if(newUsers !== null) {

    //     setUsers(newUsers);
    //     console.log(newUsers)
    //  }

    //   // localStorage.clear();

    Promise.all([api.getUsers()])
      .then(([info]) => {
        setUsers(info.reverse());
      })
      .catch((err) => {
        console.log(err, "Ошибка получения пользователей");
      });
  }, []);

  return (
    <>
      <Header />
      <Main
        onHandleMWCreateUser={handleMWCreateUserClick}
        users={users}
        onHandleMWUpdateUserOpen={handleMWUpdateUserOpen}
      />
      <ModalWindowCreateUser
        isOpen={isModalWindowCreateUserOpen}
        onClose={closeAllModalWindows}
        onCreateUser={addNewUser}
        users={users}
        textErr={textErr}
      />
      <ModalWindowUpdateUser 
      isOpen={isMWUpdateUser}
      onClose={closeAllModalWindows}
      users={users}
      selectedUser={selectedUser}
      />
    </>
  );
}

export default App;
