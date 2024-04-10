import { createContext, useState} from "react";
import list from "./demo";
import useModal from "./hooks/useModal";

export const ContextContact = createContext();

function Context({children}) {

  const [modal, handlerClose, handlerOpen] = useModal();

  const [contacts, setContacts] = useState(list);

  const [editContact, setEditContact] = useState(null);

  const [sortArr, setSortArr] = useState(false);

  const handlerAdd = (n, p, e, d) => {
    let obj = {
      id: Date.now(),
      nameUser: n.current.value,
      phone: p.current.value,
      email: e.current.value,
      description: d.current.value
    };

    handlerClose();

    let arr = [...contacts, obj];

    setContacts(arr)
    setEditContact(obj)
  };
  
  const handlerDelete = (id) => {
    let arr = contacts.filter(elem => elem.id !== id);
    setContacts(arr);
    console.log(arr)
  }

  const getEditContact = (id) => {
    setEditContact(contacts.find(elem => elem.id === id));
    handlerOpen();
    
  }

  const handlerEdit = ([n, p, e, d], key) => {

    let obj = {
      id: key,
      nameUser: n.current.value,
      phone: p.current.value,
      email: e.current.value,
      description: d.current.value
    };

    let arr = contacts.map(elem => {
      if(elem.id === obj.id){
        return {...obj}
      } else {
        return {...elem}
      }
    });

    setContacts(arr);

    handlerClose()
    
  }
  
  const [currentPage, setCurrentPage] = useState(1);
  
  const [contactsPerPage, setContactsPerPage] = useState(10);
  
  const lastContactIndex = currentPage * contactsPerPage;
  
  const firstContactIndex = lastContactIndex - contactsPerPage;
  
  const currentContact = contacts.slice(firstContactIndex,lastContactIndex);
  
  const totalContacts = contacts.length;
  
  const pagenate = pageNumber => {setCurrentPage(pageNumber)};

  let arrName = null;
  let arrPhone = null;
  let arrEmail = null;
  let arrDesc = null;

  const handlerSearch = (str) => {
    arrName = contacts.filter(elem => elem.nameUser === str);
    arrPhone = contacts.filter(elem => elem.phone === str);
    arrEmail = contacts.filter(elem => elem.email === str);
    arrDesc = contacts.filter(elem => elem.description === str);

    if(arrName.length !== 0){
      return setContacts(arrName)
    } else if(arrPhone.length !== 0){
      return setContacts(arrPhone)
    } else if(arrEmail.length !== 0){
      return setContacts(arrEmail)
    } else if(arrDesc.length !== 0){
      return setContacts(arrDesc)
    } else{
      return setContacts([]);
    }
  }

  const handlerReturnSearch = () => {
    setContacts(list);
  };

  const handlerSortable = (field) => {
    setSortArr(!sortArr);

    if(sortArr === true){
      let arr = contacts.toSorted((a, b) => a[field] > b[field] && -1);
      setContacts(arr);
    }

    if(sortArr === false){
      let arr = contacts.toSorted((a, b) => a[field] < b[field] && -1);
      setContacts(arr);
    }
    
  }
  
  const value = {
        contacts,
        setContacts,
        currentPage,
        setCurrentPage,
        contactsPerPage,
        setContactsPerPage,
        lastContactIndex,
        firstContactIndex,
        currentContact,
        totalContacts,
        pagenate,
        handlerOpen,
        modal,
        handlerClose,
        handlerAdd,
        handlerDelete,
        getEditContact,
        handlerEdit,
        editContact,
        setEditContact,
        handlerSearch,
        handlerReturnSearch,
        handlerSortable
    };
    
    return (
      <ContextContact.Provider value={value}>
        {children}
      </ContextContact.Provider>
    );
  }
  
  export default Context;
  