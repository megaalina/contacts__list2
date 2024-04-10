import { useContext, useRef, useEffect } from 'react';
import { ContextContact } from '../../Context';
import './modalwindow.css';

function ModalWindow() {

    const {modal, handlerClose, handlerAdd, editContact, handlerEdit} = useContext(ContextContact);

    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const descRef = useRef(null);

    const contact = [nameRef, phoneRef, emailRef, descRef];

    const addContacts = () => {
        if(nameRef.current.value !== '' && phoneRef.current.value !== '' && emailRef.current.value !== '' && descRef.current.value !== ''){
            handlerAdd(nameRef, phoneRef, emailRef, descRef);

            handlerClose();
        }
    }

    useEffect(() => {
      if(nameRef.current){
          nameRef.current.value = editContact.nameUser;
      }
      if(phoneRef.current){
          phoneRef.current.value = editContact.phone;
      }
      if(emailRef.current){
          emailRef.current.value = editContact.email;
      }
      if(descRef.current){
          descRef.current.value = editContact.description;
      }
  }, [editContact, modal]);

    if(!modal){
        return null
    }

  return (
    <div className="overlay">
      <div className="modal">
        <div className="content">
            <span className='btn__del'
            onClick={() => handlerClose()}
            >+</span>
            <div className="content__form">
                <div className="content__input">
                <h4>Назва контакту</h4>
                <input type="text" ref={nameRef}/>
                </div>
                <div className="content__input">
                <h4>Телефон контакту</h4>
                <input type="tel" ref={phoneRef}/>
                </div>
                <div className="content__input">
                <h4>Email контакту</h4>
                <input type="email" ref={emailRef}/>
                </div>
                <div className="content__textarea">
                <h4>Опис контакту</h4>
                <textarea name="" id="" cols="30" rows="10"
                ref={descRef}></textarea>
                </div>
                <div className="content__btn">
                  <div className="btn__edit"
                   onClick={() => {handlerEdit(contact, editContact.id)}}
                   >Редагувати</div>
                <div className="btn__remove"
                 onClick={() => handlerClose()}
                 >Закрити</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;