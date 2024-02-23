import React from 'react'
import {createPortal} from 'react-dom'
import REACTDOM from 'react-dom'
import './Modal.css';
import checkmark from './assets/Checkmark.png'
function Modal({isOpen,setOpen}) {
  if(!isOpen)
  {
    return null;
  }
  return REACTDOM.createPortal(
    <div className="modal">
      <div className="modal-container">
        <span className='topPart'>
            <span className='closeIcon'>
                <a onClick={()=>{setOpen(false)}}>
                    ╳
                </a>
            </span>
        </span>
        <img src={checkmark} alt=""/>
        <div className="modal-body">
          <p><strong>Claimed Successfully</strong></p>
          <p>You have Successfully cliamed 5,00,000 practice chips for today. Try again tommorrow.</p>
          <button className='btn' onClick={()=>{setOpen(false)}}>Okay</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  )
}

export default Modal
