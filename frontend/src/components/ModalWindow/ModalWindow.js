



function ModalWindow({ data, ...props }) {
  const { onSubmit, isValid } = props;
  
  return(
        <section className={`modal-window modal-window_type_${data.classSelector} ${props.isOpen && 'modal-window_opened'}`}>
            <div className="modal-window__container">
            <button type="button" className="modal-window__close" onClick={props.onClose}/>
            <h2 className="modal-window__heading">{data.title}</h2>
            <form className="form" name={data.user} id="user" onSubmit={onSubmit} noValidate>
            {props.children}
            
            {/* <div className="form__footer"> */}
      <button type="submit" className={`form__submit-btn form__submit-btn_type_${data.classSelector} ${isValid && 'form__submit-btn_disabled'}`} disabled={isValid}>
        {data.submit}
        </button>
        </form>
      {/* </div> */}
            </div>
        </section>
    )
}

export default ModalWindow;