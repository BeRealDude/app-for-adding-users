import { useState, useEffect } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import { useFormWithValidation } from "../../hooks/useForm";
// import { usersData } from '../Utils/usersData';

function ModalWindowConfirm({
  isOpen,
  onClose,
  textErr,
  selectedUser,
  updateUser,
  onDelete
}) {
  // console.log(selectedUser, 'выбранный юзер')

  function handleSubmit(e) {
    e.preventDefault();
    onDelete(selectedUser);
  }

  return (
    <section className={`modal-confirm ${isOpen && "modal-window_opened"}`}>
      <div className="modal-confirm__container">
        <h2 className="modal-confirm__heading">Удаление пользователя</h2>
        <p className="modal-confirm__text">Удалить выбранного пользователя?</p>
        <div className="modal-confirm__border">
        <button type="button" className="modal-confirm__btn modal-confirm__btn_cancel" onClick={onClose}>Отменить</button>
        <button
          type="submit"
          className="modal-confirm__btn modal-confirm__btn_delete"
          onClick={handleSubmit}
        >
          Удалить
          </button>
          </div>
      </div>
    </section>
  );
}

export default ModalWindowConfirm;
