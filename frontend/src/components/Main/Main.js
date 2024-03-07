import React, { useEffect } from "react";
import User from "../User/User";
import Preloader from "../Preloader/Preloader";

function Main({
  onHandleMWCreateUser,
  onHandleMWUpdateUserOpen,
  users,
  onHandleMWConfirm,
  loading,
  message
}) {

  console.log(users)
  return (
    <div className="content-wrap">
      <div className="content-wrap__side-bar"></div>
      <main className="content">
        <div className="sub-header">
          <h1 className="sub-header__users">Пользователи</h1>
          <button
            className="sub-header__btn-add"
            type="button"
            onClick={onHandleMWCreateUser}
          >
            Добавить
          </button>
        </div>
        <ul className="list">
          <li className="list__user">
            <p className="list__user-info">Фамилия</p>
            <p className="list__user-info">Имя</p>
            <p className="list__user-info">Отчество</p>
            <p className="list__user-info">E-mail</p>
            <p className="list__user-info">Логин</p>
          </li>
          {loading ?
          (<Preloader />) : message === true ? <span className="list__message">Нет добавленных пользователей</span> :
          (users !== null && message === false &&
            users.map((info) => (
              <User
                key={info._id}
                info={info}
                onHandleMWUpdateUserOpen={() => onHandleMWUpdateUserOpen(info)}
                onHandleMWConfirm={() => onHandleMWConfirm(info)}
              />
            )))
            }
        </ul>
      </main>
    </div>
  );
}

export default Main;
