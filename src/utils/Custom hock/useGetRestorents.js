import { useEffect, useState } from "react";

export const useGetRestorent=()=>{
    const [allRestorents,setAllRestorents]=useState(null);

    const getData= async ()=>{
        let res=await fetch("https://dummyjson.com/recipes");
        let data=await res.json();
        console.log(data)
        setAllRestorents(data.recipes);
    }
    useEffect(()=>{
        getData();
        //console.log('useEffect')
    },[])
    return allRestorents;

}