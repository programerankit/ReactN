//import the React and ReactDOM form node_modules
import React from "react"
import ReactDOM from "react-dom"
import { Hearder,Search } from "./utils"
import { Test } from "./components/Test"

export const App=()=>{
    return(
        <>
            {/* <Hearder/> */}
            <Search/>
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root')) 
root.render(<App/>) 