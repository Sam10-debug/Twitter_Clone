'use client'
import {useRef} from 'react'
import { useData } from "../(context)/DataContext"

const MobileHeader=()=>{

    const first= useRef()
    const second= useRef()
    const third= useRef()
    const {navState,setNavState}= useData()

    const handleNav=()=>{

        setNavState(prev=>!prev)
        first.current.classList.toggle("show")
        second.current.classList.toggle("remove")
        third.current.classList.toggle("showw")
    }

    return(
        <section className={` flex justify-between p-4 md:hidden ${!navState?'fixed':'static'} top-0 left-0 right-0 z-10 shadow-md`}>
            <div onClick={handleNav}  className='hamburger '>
			<svg ref={first} width="21" className=" " height="2" viewBox="0 0 21 2" fill="#000" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.38647 1H19.3865" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
			<svg ref={second} width="21" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.38647 1H19.3865" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
			<svg ref={third} width="21" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.38647 1H19.3865" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</div>
        <div className='w-4 h-4'>

</div>
            <div>
            <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.49314 22C5.48199 22.0029 2.53361 21.1373 0 19.5067C0.438874 19.5577 0.880351 19.583 1.32217 19.5824C3.81686 19.5864 6.24044 18.7497 8.20342 17.207C7.04711 17.1849 5.92659 16.8012 4.99851 16.1097C4.07043 15.4182 3.38118 14.4533 3.02712 13.35C3.37022 13.4166 3.71888 13.4502 4.06835 13.4503C4.5618 13.4504 5.05306 13.3847 5.52923 13.255C4.27504 13.0012 3.1471 12.3204 2.33676 11.3281C1.52642 10.3358 1.08358 9.09317 1.08337 7.81097C1.08337 7.78634 1.08337 7.76346 1.08337 7.74059C1.85242 8.16958 2.71277 8.40789 3.59251 8.43561C2.41938 7.65031 1.58919 6.44632 1.2711 5.06896C0.953014 3.69161 1.17096 2.24454 1.88054 1.02262C3.27055 2.73802 5.00492 4.1414 6.97113 5.14173C8.93733 6.14205 11.0914 6.71695 13.2937 6.82914C13.0133 5.63696 13.134 4.38535 13.637 3.26903C14.1399 2.15271 14.997 1.23427 16.0748 0.656603C17.1526 0.0789393 18.3907 -0.125558 19.5965 0.0749264C20.8023 0.275411 21.9081 0.869635 22.742 1.76515C23.9803 1.51846 25.1678 1.0627 26.2538 0.417335C25.84 1.70316 24.9747 2.79481 23.8184 3.48951C24.9167 3.35649 25.989 3.05996 27 2.60974C26.2558 3.72503 25.3194 4.69859 24.2345 5.48484C24.2468 5.72238 24.2521 5.96168 24.2521 6.20274C24.2521 13.5383 18.6772 22 8.48612 22" fill="#4C9EEB"/>
</svg>

            </div>
          
            <div>
            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.25 0.75C4.25 0.335786 3.91421 0 3.5 0C3.08579 0 2.75 0.335786 2.75 0.75V2.75L0.75 2.75C0.335786 2.75 0 3.08579 0 3.5C0 3.91421 0.335786 4.25 0.75 4.25H2.75V6.25C2.75 6.66421 3.08579 7 3.5 7C3.91421 7 4.25 6.66421 4.25 6.25V4.25L6.25 4.25C6.66421 4.25 7 3.91421 7 3.5C7 3.08579 6.66421 2.75 6.25 2.75H4.25V0.75Z" fill="#4C9EEB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.981 0.710615C13.2027 -0.0618389 14.2973 -0.0618389 14.519 0.710615L16.4244 7.35091L22.0949 9.24105C22.8242 9.48417 22.8242 10.5158 22.0949 10.7589L16.4244 12.6491L14.519 19.2894C14.2973 20.0618 13.2027 20.0618 12.981 19.2894L11.0756 12.6491L5.40513 10.7589C4.67577 10.5158 4.67577 9.48417 5.40513 9.24105L11.0756 7.35091L12.981 0.710615ZM13.75 3.46912L12.4157 8.11905C12.3429 8.37256 12.1499 8.57394 11.8997 8.65734L7.87171 10L11.8997 11.3427C12.1499 11.4261 12.3429 11.6274 12.4157 11.8809L13.75 16.5309L15.0843 11.8809C15.1571 11.6274 15.3501 11.4261 15.6003 11.3427L19.6283 10L15.6003 8.65734C15.3501 8.57394 15.1571 8.37256 15.0843 8.11905L13.75 3.46912Z" fill="#4C9EEB"/>
<path d="M6.75 16.25C7.16421 16.25 7.5 16.5858 7.5 17V18.25H8.75C9.16421 18.25 9.5 18.5858 9.5 19C9.5 19.4142 9.16421 19.75 8.75 19.75H7.5V21C7.5 21.4142 7.16421 21.75 6.75 21.75C6.33579 21.75 6 21.4142 6 21V19.75H4.75C4.33579 19.75 4 19.4142 4 19C4 18.5858 4.33579 18.25 4.75 18.25H6V17C6 16.5858 6.33579 16.25 6.75 16.25Z" fill="#4C9EEB"/>
</svg>

            </div>
        </section>
    )
}

export default MobileHeader;