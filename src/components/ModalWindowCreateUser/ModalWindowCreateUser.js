import { useState } from "react";
import ModalWindow from '../ModalWindow/ModalWindow'

function ModalWindowCreateUser(props) {
    const { isOpen, onClose } = props;
    const [surname, setSurname] = useState("");
    const [name, setName] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    
    function handleChangeSurname(e) {
        setSurname(e.target.value);
      }
      
      function handleChangeName(e) {
        setName(e.target.value);
      }

      function handleChangePatronymic(e) {
        setPatronymic(e.target.value);
      }

      function handleChangeEmail(e) {
        setEmail(e.target.value);
      }

      function handleChangeLogin(e) {
        setLogin(e.target.value);
      }


    function handleSubmit(e) {
        console.log("submit", props);
        e.preventDefault();
        props.onUpdateUser({
            surname: surname,
            name: name,
        });
      }

    return(
        <ModalWindow
        data={{
            classSelector: "create-user",
            title: "Создание пользователя",
            user: "user",
            submit: "Создать",
          }}
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
          >
            <h3 className="modal-window__input-heading">Фамилия</h3>
            <input
        value={surname || ""}
        onChange={handleChangeSurname}
        required
        minLength="2"
        maxLength="40"
        className="modal-window__text"
        type="text"
        name="userSurname"
        id="user-surname"
        placeholder="Введите фамилию"
      />
      <h3 className="modal-window__input-heading">Имя</h3>
      <input
        value={name || ""}
        onChange={handleChangeName}
        required
        minLength="2"
        maxLength="40"
        className="modal-window__text"
        type="text"
        name="userName"
        id="user-name"
        placeholder="Введите имя"
      />
      <h3 className="modal-window__input-heading">Отчество</h3>
      <input
        value={patronymic || ""}
        onChange={handleChangePatronymic}
        required
        minLength="2"
        maxLength="40"
        className="modal-window__text"
        type="text"
        name="userPatronymic"
        id="user-patronymic"
        placeholder="Введите отчество"
      />
      <h3 className="modal-window__input-heading">E-mail</h3>
      <input
        value={email || ""}
        onChange={handleChangeEmail}
        required
        minLength="2"
        maxLength="40"
        className="modal-window__text"
        type="email"
        name="userEmail"
        id="user-email"
        placeholder="Введите электронную почту"
      />
      <h3 className="modal-window__input-heading">Логин</h3>
      <input
        value={login || ""}
        onChange={handleChangeLogin}
        required
        minLength="2"
        maxLength="40"
        className="modal-window__text"
        type="text"
        name="userLogin"
        id="user-login"
        placeholder="Введите логин"
      />
        </ModalWindow>
    )
}

export default ModalWindowCreateUser;