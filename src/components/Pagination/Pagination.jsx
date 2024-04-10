import './pagination.css';
import { useContext } from 'react';
import { ContextContact } from '../../Context';
import PaginationItem from '../PaginationItem/PaginationItem';


function Pagination() {

        const {contactsPerPage, totalContacts, setContactsPerPage, currentContact, contacts} = useContext(ContextContact);

    const pageNumbers = [];
    let i = 1;

    if(contacts.lenght !== 0){
        for(i = 1; i < Math.ceil(totalContacts / contactsPerPage) + 1; i++){
            pageNumbers.push(i);
        }
    } else{
        for(i = 1; i < 6; i++){
            pageNumbers.push(i);
        }
    }

    

  return (
    <div className="pagination">
      <ul className='pagination__items'>
        {pageNumbers.map((number, index) => <PaginationItem
        key={index}
        number={number}/>)}
      </ul>
    </div>
  );
}

export default Pagination;
