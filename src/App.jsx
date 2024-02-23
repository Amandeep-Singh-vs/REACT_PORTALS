import { useEffect, useRef, useState } from 'react'
import './App.css'
import Modal from './Modal';

function App() {
  const [isOpen,setOpen] = useState(false);
  const modalRef = useRef(null)
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, setOpen]);
  return (
    <div className="App" ref={modalRef}>
      <h2>React Portals</h2>
      <button className='btn' onClick={()=> setOpen(true)}>Open modal</button>
      <Modal isOpen={isOpen} setOpen={setOpen}/> 
    </div>
  )
}

export default App
