import './input.css';
import { useContext, useRef } from 'react';
import { ContextContact } from '../../Context';
import { BsSearch } from "react-icons/bs";
import list from '../../demo';
import { BsSortDown as Sortable} from "react-icons/bs";


function Input() {

    const {handlerSearch, setContacts, handlerSortable} = useContext(ContextContact);

    const searchField = useRef(null);

    if(searchField.current){
      searchField.current.value = '';
      return (
        <div className="form2">
          <div className="form__container">
          <div className="btn__sort" onClick={() => handlerSortable('nameUser')}>
          <Sortable/>
          </div>
          <input className='input__search2' type="text" placeholder='Назва контакту' ref={searchField}/>
        <div className='btn__search2'>
          <BsSearch className='icon__search2'
          onClick={() => {handlerSearch(searchField.current.value)}}
          />
        </div>
          </div>
          <div className="form__container">
          <div className="btn__return--search2"
          onClick={() => setContacts(list)}>
            Повернутися до пошуку
          </div>
          </div>
      </div>
      )
  }

    
    

  return (
    <div className="form">
      <div className="btn__sort"
      onClick={() => handlerSortable('nameUser')}>
            <Sortable/>
          </div>
      <input className='input__search' type="text" placeholder='Назва контакту' ref={searchField}/>
      <div className='btn__search'>
        <BsSearch className='icon__search'
        onClick={() => {handlerSearch(searchField.current.value)}}
        />
      </div>
    </div>
  );
}

export default Input;