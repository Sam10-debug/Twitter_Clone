'use client'
import { useState } from 'react';
import Modals from "@/app/(shared)/modal/Modal"
import { NavData } from "@/app/(data)/Data"
import NavIcon from "@/app/(shared)/nav/NavIcon"


const Nav = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  
 const mapped= NavData.map(elem=>(<NavIcon key={elem.altText} title={elem.title} altText={elem.altText} source={elem.source} />))
 
  return (
    <header className=" hidden md:block w-1/5 p-8">
        <nav className=" space-y-6">
            {mapped}
        </nav>
        <div className="bg-red-600 py-4">
          <button onClick={openModal} className='text-red-500 bg-twitter-blue rounded-[100px] text-custom font-bold w-[180px] h-[50px] '>Tweet</button>
          <Modals modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
        </div>
    </header>
  )
}

export default Nav
