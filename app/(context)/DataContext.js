'use client'
import { useState,useContext, createContext } from "react";

const DataContext= createContext({})
const {Provider}= DataContext

const DataGet=({children})=>{
    const [tweet,setTweet]=useState([])
    return (
        <Provider value={{tweet,setTweet}}>
            {children}
        </Provider>
    )
}

const useData=()=>useContext(DataContext)

export {useData, DataGet}
