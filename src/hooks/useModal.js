import { useState } from "react";

function useModal(){

    const [modal, setModal] = useState(null);

  const handlerOpen = () => {
    setModal(true)
  };

  const handlerClose = () => {
    setModal(null);
    
    
  }
    
    return [modal, handlerClose, handlerOpen]
}

export default useModal
