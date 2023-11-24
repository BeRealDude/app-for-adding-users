import React from "react";
import User from "../User/User"; 

function Main({ onHandleMWCreateUser, onHandleMWUpdateUserOpen, users }) {
    console.log(users)

const u = []
    
    return(
    <div className="content-wrap">
        <div className="content-wrap__side-bar"></div>
        <main className="content">
        <div className="sub-header">
            <h1 className="sub-header__users">Пользователи</h1>
            <button className="sub-header__btn-add"
            type="button"
            onClick={onHandleMWCreateUser}
            >Добавить
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
            {users !== null && users !== undefined ? users.map((info) => 
            <User
              key={info._id}
              info={info}
              onHandleMWUpdateUserOpen={() => onHandleMWUpdateUserOpen(info)}
            /> 
            ) : u}
        </ul>
        </main>
        </div>
    )
}

export default Main;