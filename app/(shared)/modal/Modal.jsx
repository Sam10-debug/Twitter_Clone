'use client'
import { useState } from 'react';
import Modal from 'react-modal';

const Modals = ({modalIsOpen,setIsOpen}) => {
    const [text, setText]= useState('')
    const handleChange=(e)=>{
        setText(e.target.value)
        console.log(text)
    }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width:'50%'
        },
      };
    let subtitle;

  function afterOpenModal() {
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <form>
          <textarea name='text' value={text} onChange={handleChange} className='w-full border-[1px] '></textarea>
        </form>
      </Modal>
  )
}

export default Modals
