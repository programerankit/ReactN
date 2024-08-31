import { useEffect } from "react"

export const Contact=()=>{
    console.log('render perent 1')
    useEffect(()=>{
        
        // const timer=setInterval(() => {
            console.log("useEffect perent 6")
        // }, 1000);
        return()=>{
            // clearInterval(timer)
            console.log("useEffect as componentWillUnmount");
        }
    },[])
    return (<>
        <h1>
            This is contact us
        </h1>
        <ContactChile1/>
        <ContactChile2/>
    </>)
}


export const ContactChile1=()=>{

    useEffect(()=>{
        console.log('ContactChile1 useEffect 4')
        return()=>{}    //it call when we go at another compnent
    },[])

    console.log('render ContactChile1 2')
    return(<>
    
    </>)
}
export const ContactChile2=()=>{

    useEffect(()=>{
        console.log('ContactChile1 useEffect2 5')
        return()=>{}    //it call when we go at another compnent
    },[])

    console.log('render ContactChile2 3')
    return(<>
    
    </>)
}