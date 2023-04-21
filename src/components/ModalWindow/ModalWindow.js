function ModalWindow({ data, ...props }) {
  const { onSubmit } = props;
    return(
        <section className={`modal-window modal-window_type_${data.classSelector} ${props.isOpen && 'modal-window_opened'}`}>
            <div className="modal-window__container">
            <button type="button" className="modal-window__close" onClick={props.onClose}/>
            <h2 className="modal-window__heading">{data.title}</h2>
            <form className="form" name={data.user} id="user" onSubmit={onSubmit}>
            {props.children}
            </form>
            <div className="form__footer">
      <button type="submit" className="form__submit-btn">{data.submit}</button>
      </div>
            </div>
        </section>
    )
}

export default ModalWindow;