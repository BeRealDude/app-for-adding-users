import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWindowCreateUser from "../ModalWindowCreateUser/ModalWindowCreateUser";
import usersData from '../Utils/usersData'


function App() {

  const [isModalWindowCreateUserOpen, setModalWindowCreateUserOpen] = useState(false);
  const [users, setUsers] = useState(usersData);


  function handleMWCreateUserClick() {
    console.log('открыть')
    setModalWindowCreateUserOpen(true);
  }

  function closeAllModalWindows() {
    setModalWindowCreateUserOpen(false);
  }

  

  const addUser = (newUsers) => {
    setUsers(user => [newUsers, ...user]);
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
    users={users}
    />
    </>
  );
}

export default App;
