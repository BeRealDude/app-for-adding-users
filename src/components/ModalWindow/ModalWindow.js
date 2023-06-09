// import { useState } from "react";



function ModalWindow({ data, ...props }) {
  const { onSubmit, formValid } = props;

//   useEffect(() => {
// if(isOpen){

// }
//   }, [isOpen])


    return(
        <section className={`modal-window modal-window_type_${data.classSelector} ${props.isOpen && 'modal-window_opened'}`}>
            <div className="modal-window__container">
            <button type="button" className="modal-window__close" onClick={props.onClose}/>
            <h2 className="modal-window__heading">{data.title}</h2>
            <form className="form" name={data.user} id="user" onSubmit={onSubmit} noValidate>
            {props.children}
            </form>
            <div className="form__footer">
      <button type="submit" name="create" form="user" className={`form__submit-btn form__submit-btn_type_${data.classSelector} ${!formValid && 'form__submit-btn_disabled'}`} disabled={!formValid}>
        {data.submit}
        </button>
      </div>
            </div>
        </section>
    )
}

export default ModalWindow;