import { useEffect, useState } from "react";

export const useInternetStatus=()=>{
    
     const [internetStatus,setInternetStatus]=useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setInternetStatus(false)
        })

        window.addEventListener("online",()=>{
            setInternetStatus(true)
        })

    },[])
    return internetStatus;
}