
function User(props) {
    const { info } = props;

    return(
        <li className="list__user" >
                <p className="list__user-info">{info.surname}</p>
                <p className="list__user-info">{info.name}</p>
                <p className="list__user-info">{info.patronymic}</p>
                <p className="list__user-info">{info.email}</p>
                <p className="list__user-info">{info.login}</p>
                <div className="list__btn-wrap">
                <button className="list__user-btn-edit"></button>
                <button className="list__user-btn-delete"></button>
                </div>
            </li>
    );
}

export default User;