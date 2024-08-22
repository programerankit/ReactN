import { useState } from "react";

export const Test=()=>{
    const [name,setName]=useState(true)
    let data="Ankit";
    const clickBtn=()=>{
        setName((pre)=>(!pre))
    }
    console.log('render')
    return(<>
        <h1>
            {name}
        </h1>
        <button onClick={clickBtn}>click</button>
    </>)

}