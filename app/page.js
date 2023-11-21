'use client'
import Modals from "@/app/(shared)/modal/Modal"
import Container from '@/app/(container)/Container'
import {useData} from '@/app/(context)/DataContext'
import MobileHeader from '@/app/(container)/MobileHeader'

export default function Home() {
  // USE CALLBACK HOOK ON THE NAV COMPONENT
  const {modalIsOpen, setIsOpen} = useData()
  function openModal() {
    setIsOpen(true);
  }

  return (
    <main className="w-full md:w-3/5 md:p-24 p-4 mt-12 md:mt-0">
      <MobileHeader />
      <Container />
      <div  onClick={openModal} className=' fixed bottom-10 right-2 md:hidden z-50'>
      <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_4_3061)">
<circle cx="32.4241" cy="31" r="28" fill="#4C9EEB"/>
</g>
<path d="M25.9498 42.85C27.9163 29.4522 38.4604 21.7605 43.8745 21.6686C43.9298 21.6677 43.9721 21.7157 43.9718 21.771C43.9362 28.176 40.5774 28.4858 38.8107 28.6488C38.4024 28.6864 38.0792 28.7162 37.9016 28.8116C36.7051 29.0931 35.8781 29.9087 35.5262 30.3248C35.3676 30.5124 36.7391 30.733 39.1457 30.5223C39.2335 30.5146 39.287 30.6168 39.2307 30.6847C37.238 33.0897 35.0191 33.5749 33.6282 33.8791C33.1759 33.978 32.8111 34.0578 32.5702 34.1782C30.9172 35.7975 28.1237 39.5278 26.1335 42.917C26.078 43.0114 25.9339 42.9584 25.9498 42.85Z" fill="white"/>
<path d="M25 22.4241C25.4142 22.4241 25.75 22.7599 25.75 23.1741V26.6741H29.25C29.6642 26.6741 30 27.0099 30 27.4241C30 27.8383 29.6642 28.1741 29.25 28.1741H25.75V31.6741C25.75 32.0883 25.4142 32.4241 25 32.4241C24.5858 32.4241 24.25 32.0883 24.25 31.6741V28.1741H20.75C20.3358 28.1741 20 27.8383 20 27.4241C20 27.0099 20.3358 26.6741 20.75 26.6741H24.25V23.1741C24.25 22.7599 24.5858 22.4241 25 22.4241Z" fill="white"/>
<defs>
<filter id="filter0_d_4_3061" x="0.424072" y="0" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_3061"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_3061" result="shape"/>
</filter>
</defs>
</svg>

      </div>
      <Modals modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </main>
  )
}

//today
//navlink 

//perfromance issue
//check if there is something you can do with light house before starting
//try to use erformant strategies while building this
//use tailwind config well,
//get all font sizes youll use, colors and all repeatable dimensions in the config

//GENERAL PSEUDO CODE
//FOR THE DESKTOP, THE NAV AND THE TRENDS SECTION WILL BE ON THE LAYOUT BY THE LEFT
//FOR THE MOBILE, ITLL COME THROUGH AN HAMBURGER, SO ITLL BE IN TO THE LEFT OF -100% THEN COME IN ONCLOCIK OF THE HAMBURGER

//FOR THE PORTFOLIO SET THE PRIORITY OF THE IMAGES TO BE LOADED FIRST
