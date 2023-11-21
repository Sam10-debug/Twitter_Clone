'use client'
import { useState } from 'react';
import Modal from 'react-modal';
import {useData} from '@/app/(context)/DataContext'

const Modals = ({modalIsOpen,setIsOpen}) => {

  const {setTweet}= useData()

  const [text, setText]= useState('')
  const handleChange=(e)=>{
      setText(e.target.value)
  }

  const handleClick=()=>{
      setTweet(prev=>{
        if(text.length!==0){
          return [...prev,text]
        }
        return prev
      })
      setIsOpen(false);
      setText('')
  }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width:'80%',
          height:'200px'
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
     
          <textarea name='text' value={text} onChange={handleChange} className='w-full  h-[150px] '></textarea>
          <div className=' flex justify-end'><button onClick={handleClick} >POST</button></div>
  
      </Modal>
  )
}

export default Modals
