import './app.css'
import Contacts from './components/Contacts/Contacts';
import ModalWindow from './components/ModalWindow/ModalWindow';
import Pagination from './components/Pagination/Pagination';
import ModalWindow2 from './components/ModalWindows2/ModalWindows2';
import { useContext } from 'react';
import { ContextContact } from './Context';
import Input from './components/Input/Input';

function App() {

  const {editContact} = useContext(ContextContact);
  
  return (
    <div className="App">
      <Input/>
      <Contacts/>
      <Pagination></Pagination>
      {
      !editContact ?
      <ModalWindow/>
      : <ModalWindow2/>
      }
    </div>
  );
}

export default App;
