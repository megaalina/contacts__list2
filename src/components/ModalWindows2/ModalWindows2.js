import { useContext, useRef, useEffect } from 'react';
import { ContextContact } from '../../Context';
import '../ModalWindow/modalwindow.css';

function ModalWindow2() {

    const {modal, handlerClose, handlerAdd, editContact, handlerEdit} = useContext(ContextContact);

    const nameAddRef = useRef(null);
    const phoneAddRef = useRef(null);
    const emailAddRef = useRef(null);
    const descAddRef = useRef(null);

    const contact = [nameAddRef, phoneAddRef, emailAddRef, descAddRef];

    const addContacts = () => {
        if(nameAddRef.current.value !== '' && phoneAddRef.current.value !== '' && emailAddRef.current.value !== '' && descAddRef.current.value !== ''){
            handlerAdd(nameAddRef, phoneAddRef, emailAddRef, descAddRef);

            handlerClose();
        }
    }

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
                <input type="text" ref={nameAddRef}/>
                </div>
                <div className="content__input">
                <h4>Телефон контакту</h4>
                <input type="tel" ref={phoneAddRef}/>
                </div>
                <div className="content__input">
                <h4>Email контакту</h4>
                <input type="email" ref={emailAddRef}/>
                </div>
                <div className="content__textarea">
                <h4>Опис контакту</h4>
                <textarea name="" id="" cols="30" rows="10"
                ref={descAddRef}></textarea>
                </div>
                <div className="content__btn">
                  <div className="btn__add"
                onClick={() => addContacts()}
                >Додати</div>
                
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

export default ModalWindow2;