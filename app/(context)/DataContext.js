'use client'
import { useState,useContext, createContext } from "react";

const DataContext= createContext({})
const {Provider}= DataContext

const DataGet=({children})=>{
    const [tweet,setTweet]=useState([])
    const [modalIsOpen, setIsOpen] = useState(false);
    const [navState, setNavState] = useState(false);
    return (
        <Provider value={{tweet,setTweet,modalIsOpen,setIsOpen,navState,setNavState}}>
            {children}
        </Provider>
    )
}

const useData=()=>useContext(DataContext)

export {useData, DataGet}
