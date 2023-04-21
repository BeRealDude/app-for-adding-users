import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWindowCreateUser from "../ModalWindowCreateUser/ModalWindowCreateUser"


function App() {

  const [isModalWindowCreateUserOpen, setModalWindowCreateUserOpen] = useState(false);
  const [users, setUsers] = useState([]);


  function handleMWCreateUserClick() {
    console.log('открыть')
    setModalWindowCreateUserOpen(true);
  }

  function closeAllModalWindows() {
    setModalWindowCreateUserOpen(false);
  }

  const addUser = (newUser) => {
    setUsers(user => [...user, newUser]);
    closeAllModalWindows();
  }

  return (
    <>
    <Header />
    <Main 
    onHandleMWCreateUser={handleMWCreateUserClick}
    users={users}
    />
    <ModalWindowCreateUser 
    isOpen={isModalWindowCreateUserOpen}
    onClose={closeAllModalWindows}
    onCreateUser={addUser}
    />
    </>
  );
}

export default App;
