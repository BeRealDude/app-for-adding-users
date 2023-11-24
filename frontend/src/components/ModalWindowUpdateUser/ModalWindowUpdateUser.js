import { useState, useEffect } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import { useFormWithValidation } from "../../hooks/useForm";
// import { usersData } from '../Utils/usersData';

function ModalWindowUpdateUser({ isOpen, onClose, users, onCreateUser, textErr, selectedUser }) {

  const { handleChange, resetForm, isValid, values, errors, setValues } = useFormWithValidation();



const err =
!isValid ||
(values.surname === selectedUser.surname
&& values.name === selectedUser.name
&& values.patronymic === selectedUser.patronymic
&& values.email === selectedUser.email
&& values.login === selectedUser.login)




   useEffect(() => {
    if(selectedUser) {
      setValues(selectedUser)
    } 
  }, [isOpen]);
 
 

  

  console.log(selectedUser, 'выбранный юзер')
  

  function handleSubmit(e) {
    e.preventDefault();
    onCreateUser({
      surname: values.surname,
      name: values.name,
      patronymic: values.patronymic,
      email: values.email,
      login: values.login,
    });
  }

  return (
    <ModalWindow
      data={{
        classSelector: "update-user",
        title: "Редактировать пользователя",
        user: "user",
        submit: "Редактировать",
      }}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={err}
    >
      <h3 className="modal-window__input-heading">Фамилия</h3>
      <input
        // onBlur={blurHandler}
        value={values?.surname || ''}
        onChange={handleChange}
        autoComplete="on"
        required
        minLength="2"
        maxLength="40"
        className="modal-window__text"
        type="text"
        name="surname"
        id="surname"
        placeholder="Введите фамилию"
      />
      {errors.surname && <span className="modal-window__error">{errors.surname}</span>}
      <h3 className="modal-window__input-heading">Имя</h3>
      <input
        value={values?.name || ""}
        onChange={handleChange}
        // onBlur={name.onBlur}
        required
        minLength="2"
        maxLength="40"
        className="modal-window__text"
        type="text"
        name="name"
        id="name"
        placeholder="Введите имя"
      />
      {errors.name && <span className="modal-window__error_name">{errors.name}</span>}
      <h3 className="modal-window__input-heading">Отчество</h3>
      <input
        value={values?.patronymic || ""}
        onChange={handleChange}
        // onBlur={patronymic.onBlur}
        required
        minLength="2"
        maxLength="40"
        className="modal-window__text"
        type="text"
        name="patronymic"
        id="patronymic"
        placeholder="Введите отчество"
      />
      {errors.patronymic && <span className="modal-window__error_patronymic">{errors.patronymic}</span>}
      <h3 className="modal-window__input-heading">E-mail</h3>
      <input
        value={values?.email || ""}
        onChange={handleChange}
        
        required
        minLength="2"
        maxLength="40"
        className="modal-window__text"
        type="email"
        name="email"
        id="email"
        placeholder="Введите электронную почту"
      />
      {errors.email && <span className="modal-window__error_email">{errors.email}</span>}
      <h3 className="modal-window__input-heading">Логин</h3>
      <input
        value={values?.login || ""}
        onChange={handleChange}
        required
        minLength="2"
        maxLength="40"
        className="modal-window__text"
        type="text"
        name="login"
        id="login"
        placeholder="Введите логин"
      />
      {errors.login && <span className="modal-window__error_login">{errors.login}</span>}
      {textErr && <span className="modal-window__error_login">{textErr}</span>}
    </ModalWindow>
  );
}

export default ModalWindowUpdateUser;