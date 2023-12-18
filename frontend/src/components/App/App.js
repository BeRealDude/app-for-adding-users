import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWindowCreateUser from "../ModalWindowCreateUser/ModalWindowCreateUser";
import * as api from "../../utils/api";
import ModalWindowUpdateUser from "../ModalWindowUpdateUser/ModalWindowUpdateUser";
import ModalWindowConfirm from "../ModalWindowConfirm/ModalWindowConfirm";
import { handleServerError } from "../../utils/validation";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  const [isModalWindowCreateUserOpen, setModalWindowCreateUserOpen] = useState(false);
  const [isMWUpdateUser, setMWUpdateUser] = useState(false);
  const [isMWConfirm, setMWConfirm] = useState(false);

  const [textErr, setTextErr] = useState("");
  const [textErrConfirm, setTextErrConfirm] = useState("");
  const [textErrUpdate, setTextErrUpdate] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setTextErr("");
      setTextErrConfirm("");
      setTextErrUpdate("");
    }, 4000);
  }, [textErr, textErrConfirm, textErrUpdate]);

  function handleMWCreateUserClick() {
    setModalWindowCreateUserOpen(true);
  }

  function handleMWUpdateUserOpen(info) {
    setMWUpdateUser(true);
    setSelectedUser(info);
  }

  function handleMWConfirmOpen(info) {
    setMWConfirm(true);
    setSelectedUser(info);
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
        handleServerError(err, setTextErr);
      });
  }

  function updateCurrentUser(info) {
    api
      .updateUser(info)
      .then(() => {
        setSelectedUser(info);
        closeAllModalWindows();
      })
      .catch((err) => {
        handleServerError(err, setTextErrUpdate);
      });
  }

  function deleteUser(info) {
    console.log(info);
    api
      .deleteUser(info)
      .then(() => {
        setUsers((state) =>
          state.filter((info) => info._id !== selectedUser._id)
        );
        closeAllModalWindows();
      })
      .catch((err) => {
        handleServerError(err, setTextErrConfirm);
      });
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
        textErrUpdate={textErrUpdate}
      />
      <ModalWindowConfirm
        isOpen={isMWConfirm}
        onClose={closeAllModalWindows}
        onDelete={deleteUser}
        selectedUser={selectedUser}
        textErrConfirm={textErrConfirm}
      />
    </>
  );
}

export default App;
