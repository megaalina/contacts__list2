import './addbtn.css';
import { useContext } from 'react';
import { ContextContact } from '../../Context';


function AddBtn() {

    const {handlerOpen} = useContext(ContextContact);

  return (
    <div className="btn__add"
    onClick={() => {handlerOpen()}}>
      Додати
    </div>
  );
}

export default AddBtn;
