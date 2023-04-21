import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWindowCreateUser from "../ModalWindowCreateUser/ModalWindowCreateUser"


function App() {

  const [isModalWindowCreateUserOpen, setModalWindowCreateUserOpen] = useState(false);

  function handleMWCreateUserClick() {
    console.log('открыть')
    setModalWindowCreateUserOpen(true);
  }

  function closeAllModalWindows() {
    setModalWindowCreateUserOpen(false);
  }

  return (
    <>
    <Header />
    <Main 
    onHandleMWCreateUser={handleMWCreateUserClick}
    />
    <ModalWindowCreateUser 
    isOpen={isModalWindowCreateUserOpen}
    onClose={closeAllModalWindows}
    />
    </>
  );
}

export default App;
