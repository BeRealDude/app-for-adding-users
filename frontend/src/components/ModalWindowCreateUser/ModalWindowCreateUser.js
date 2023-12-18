import { useEffect } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import { useFormWithValidation } from "../../hooks/useForm";

function ModalWindowCreateUser({
  isOpen,
  onClose,
  users,
  onCreateUser,
  textErr,
}) {
  const { handleChange, resetForm, isValid, values, errors } =
    useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [isOpen]);

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
        classSelector: "create-user",
        title: "Создание пользователя",
        user: "user",
        submit: "Создать",
      }}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={!isValid}
    >
      <h3 className="modal-window__input-heading">Фамилия</h3>
      <input
        value={values.surname || ""}
        onChange={handleChange}
        required
        minLength="2"
        maxLength="40"
        className="modal-window__text"
        type="text"
        name="surname"
        id="surname"
        placeholder="Введите фамилию"
      />
      {errors.surname && (
        <span className="modal-window__error">{errors.surname}</span>
      )}
      <h3 className="modal-window__input-heading">Имя</h3>
      <input
        value={values.name || ""}
        onChange={handleChange}
        required
        minLength="2"
        maxLength="40"
        className="modal-window__text"
        type="text"
        name="name"
        id="name"
        placeholder="Введите имя"
      />
      {errors.name && (
        <span className="modal-window__error_name">{errors.name}</span>
      )}
      <h3 className="modal-window__input-heading">Отчество</h3>
      <input
        value={values.patronymic || ""}
        onChange={handleChange}
        required
        minLength="2"
        maxLength="40"
        className="modal-window__text"
        type="text"
        name="patronymic"
        id="patronymic"
        placeholder="Введите отчество"
      />
      {errors.patronymic && (
        <span className="modal-window__error_patronymic">
          {errors.patronymic}
        </span>
      )}
      <h3 className="modal-window__input-heading">E-mail</h3>
      <input
        value={values.email || ""}
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
      {errors.email && (
        <span className="modal-window__error_email">{errors.email}</span>
      )}
      <h3 className="modal-window__input-heading">Логин</h3>
      <input
        value={values.login || ""}
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
      {errors.login && (
        <span className="modal-window__error_login">{errors.login}</span>
      )}
      {textErr && <span className="modal-window__error_login">{textErr}</span>}
    </ModalWindow>
  );
}

export default ModalWindowCreateUser;
