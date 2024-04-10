import './paginationitem.css';
import { useContext } from 'react';
import { ContextContact } from '../../Context';

function PaginationItem({number}) {

    const {pagenate} = useContext(ContextContact);


  return (
    <li className='pagination__item'
    onClick={() => pagenate(number)}>
        <a href="#">{number}</a>
        </li>
  );
}

export default PaginationItem;