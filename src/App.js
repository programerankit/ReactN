//import the React and ReactDOM form node_modules
import React from "react"
import ReactDOM from "react-dom/client"
import { Hearder,Search,Layout,Error,Home,About,Contact } from "./utils"
import { Test } from "./components/Test"
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/home",
                element:<Home/>
            },
            {
                path:'/card',
                element:<Search/>
            },
            {
                path:'/food',
                element:<Search/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contactus',
                element:<Contact/>
            }
        ]
    }
])

export const App=()=>{
    return(
        <>
            {/* <Hearder/> */}
            <RouterProvider router={router}>
                <Search/>
            </RouterProvider>
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root')) 
root.render(<App/>) 