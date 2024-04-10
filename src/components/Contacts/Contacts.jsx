
import list from '../../demo';
import OneContact from '../OneContact/OneContact';
import { useContext } from 'react';
import { ContextContact } from '../../Context';

function Contacts() {

  const {currentContact, setContacts} = useContext(ContextContact);

  if(currentContact.length === 0){
    return (
      <div className='message'>
        <h2>Контакт не знайдено</h2>
        <div className="btn__return--search"
        onClick={() => setContacts(list)}>
          Повернутися до пошуку
        </div>
      </div>
    )
  }

  return (
   <ul>
    {currentContact.map(elem => <OneContact key={elem.id} {...elem}/>)}
   </ul>
  );
}

export default Contacts;
