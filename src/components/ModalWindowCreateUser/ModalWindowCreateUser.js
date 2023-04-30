import { useState, useEffect } from "react";
import ModalWindow from '../ModalWindow/ModalWindow'


function ModalWindowCreateUser(props) {
    const { isOpen, onClose, users} = props;
    const [surname, setSurname] = useState("");
    const [surnameTouched, setSurnameTouched] = useState(false);
    const [surnameError, setSurnameError] = useState("Нужно ввести фамилию");

    const [formValid, setFormValid] = useState(false);

    const [name, setName] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    
    useEffect(() => {
      if (isOpen) {
        setSurname("");
        setName("");
        setPatronymic("");
        setEmail("");
        setLogin("");
        setFormValid(false);
      }
    }, [isOpen]);

    useEffect(() => {
      if(surnameError) {
        setFormValid(false)
      } else {
        setFormValid(true)
      }
    }, [surnameError]);
    
    function handleChangeSurname(e) {
        setSurname(e.target.value);
        if(e.target.value.length < 2 || e.target.value.length > 30) {
          setSurnameError('Фамилия должна быть не меньше 2 символов и не больше 30')
          if(!e.target.value) {
            setSurnameError('Нужно ввести фамилию')
          }
        } else {
          setSurnameError('')
        }
      }

      function blurHandler(e) {
        switch (e.target.name) {
          case 'surname':
            setSurnameTouched(true);
            console.log('касание')
          break;
          // no default
        }
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
        e.preventDefault();
        props.onCreateUser({
            surname,
            name,
            patronymic,
            email,
            login,
            id: users.length
        },);
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
          formValid={formValid}
          >
            <h3 className="modal-window__input-heading">Фамилия</h3>
            <input
            onBlur={blurHandler}
        value={surname || ""}
        onChange={handleChangeSurname}
        required
        minLength="2"
        maxLength="40"
        className="modal-window__text"
        type="text"
        name="surname"
        id="surname"
        placeholder="Введите фамилию"
      />
      {(surnameTouched && surnameError) && <span className="modal-window__error">{surnameError}</span>}
      <h3 className="modal-window__input-heading">Имя</h3>
      <input
        value={name || ""}
        onChange={handleChangeName}
        required
        minLength="2"
        maxLength="40"
        className="modal-window__text"
        type="text"
        name="name"
        id="name"
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
        name="patronymic"
        id="patronymic"
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
        name="email"
        id="email"
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
        name="login"
        id="login"
        placeholder="Введите логин"
      />
        </ModalWindow>
    )
}

export default ModalWindowCreateUser;