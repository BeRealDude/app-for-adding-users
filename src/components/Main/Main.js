import React from "react";
import User from "../User/User"; 

function Main(props) {
    
    
    return(
    <div className="content-wrap">
        <div className="content-wrap__side-bar"></div>
        <main className="content">
        <div className="sub-header">
            <h1 className="sub-header__users">Пользователи</h1>
            <button className="sub-header__btn-add"
            type="button"
            onClick={props.onHandleMWCreateUser}
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
            {/* <li className="list__user">
                <p className="list__user-info">Иванов</p>
                <p className="list__user-info">Иван</p>
                <p className="list__user-info">Иванович</p>
                <p className="list__user-info">mail1@mail.com</p>
                <p className="list__user-info">user1</p>
                <div className="list__btn-wrap">
                <button className="list__user-btn-edit"></button>
                <button className="list__user-btn-delete"></button>
                </div>
            </li> */}
            {props.users.map((info) => 
            <User
              key={info.id}
              info={info}
            />
            )}
        </ul>
        </main>
        </div>
    )
}

export default Main;