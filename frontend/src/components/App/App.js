import React, { useState, useEffect, useId, useCallback } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWindowCreateUser from "../ModalWindowCreateUser/ModalWindowCreateUser";
import * as api from "../../utils/api";
import ModalWindowUpdateUser from "../ModalWindowUpdateUser/ModalWindowUpdateUser";
import ModalWindowConfirm from "../ModalWindowConfirm/ModalWindowConfirm";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  const [isModalWindowCreateUserOpen, setModalWindowCreateUserOpen] = useState(false);
  const [isMWUpdateUser, setMWUpdateUser] = useState(false);
  const [isMWConfirm, setMWConfirm] = useState(false);

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

  

  function handleMWCreateUserClick() {
    setModalWindowCreateUserOpen(true);
  }
 

  function handleMWUpdateUserOpen(info) {
    setMWUpdateUser(true);
    setSelectedUser(info)
  }

  function handleMWConfirmOpen(info) {
    setMWConfirm(true);
    setSelectedUser(info)
  }

  function closeAllModalWindows() {
    setModalWindowCreateUserOpen(false);
    setMWUpdateUser(false);
    setMWConfirm(false);
  }

  function addNewUser(info) {
    api
      .addUser(info)
      .then((info) => {
        setUsers([info, ...users]);
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


  

  function updateCurrentUser(info) {
    api
    .updateUser(info)
    .then(() => {
      
       setSelectedUser(info)
      closeAllModalWindows();
      
    })
    .catch((err) => {
      console.log(err, 'Ошибка при редактировании')
    })

  }


  function deleteUser(info) {
    console.log(info)
    api
    .deleteUser(info)
    .then(() => {
      setUsers((state) => state.filter((info) => info._id !== selectedUser._id))
      closeAllModalWindows();
    })
    .catch((err) => {
      console.log(err, 'Ошибка при удалении!')
    })
  }



  useEffect(() => {

    Promise.all([api.getUsers()])
      .then(([info]) => {
        setUsers(info.reverse());
      })
      .catch((err) => {
        console.log(err, "Ошибка получения пользователей");
      });
  }, [selectedUser]);

  return (
    <>
      <Header />
      <Main
        onHandleMWCreateUser={handleMWCreateUserClick}
        users={users}
        onHandleMWUpdateUserOpen={handleMWUpdateUserOpen}
        selectedUser={selectedUser}
        onHandleMWConfirm={handleMWConfirmOpen}
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
      updateUser={updateCurrentUser}
      />
      <ModalWindowConfirm 
      isOpen={isMWConfirm}
      onClose={closeAllModalWindows}
      onDelete={deleteUser}
      selectedUser={selectedUser}
      />
    </>
  );
}

export default App;
