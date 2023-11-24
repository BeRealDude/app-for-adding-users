
function User(props) {
    const { info, onHandleMWUpdateUserOpen } = props;

    return(
        <li className="list__user" key={info._id}>
                <p className="list__user-info">{info.surname}</p>
                <p className="list__user-info">{info.name}</p>
                <p className="list__user-info">{info.patronymic}</p>
                <p className="list__user-info">{info.email}</p>
                <p className="list__user-info">{info.login}</p>
                <div className="list__btn-wrap">
                <button type="button" onClick={onHandleMWUpdateUserOpen} className="list__user-btn-edit"></button>
                <button className="list__user-btn-delete"></button>
                </div>
            </li>
    );
}

export default User;