import { useContext } from 'react';
import { ContextContact } from '../../Context';
import './onecontact.css'

function OneContact({id, nameUser, phone, email, description, isFilter}) {

    const {handlerDelete, getEditContact, handlerOpen} = useContext(ContextContact)
  return (
    <li className='contact' style={
        isFilter === true ? {display: 'flex'} : {}
      }
      >
        <div className='avatar'>
        <img src="https://pozovna.in.ua/wp-content/uploads/2018/02/foto-rezume.jpg" alt="" />
        </div>
        <div className="container">
        <div className='description'>
            <div className='description__item'>
              <div className="description__item--h3"></div>
            <h3>Ідентифікатор контакту</h3>
            <p>{id}</p>
            </div>
            <div className='description__item'>
                <h3>Назва контакту</h3>
            <p>{nameUser}</p>
            </div>
            <div className='description__item'>
                <h3>Телефон контакту</h3>
            <p>{phone}</p>
            </div>
            <div className='description__item'>
                <h3>Email контакту</h3>
            <p>{email}</p>
            </div>
        </div>
        <div className='description'>
        <div className='description__item--p'>
            <h3>Опис контакту:</h3>
            <p>{description}</p>
            </div>
        </div>
        <div className="btn">
        <div className="btn__add"
    onClick={() => {handlerOpen()}}>
      Додати
    </div>
                <div className="btn__edit"
                onClick={() => {getEditContact(id)}}
                >Редагувати</div>
                <div className="btn__remove"
                onClick={() => {handlerDelete(id)}}>Видалити</div>
            </div>
        </div>
        
    </li>
  );
}

export default OneContact;
