import { useRouteError } from "react-router-dom"
export const Error=()=>{
    const error=useRouteError();
    return(<>
        <h1>Opps!</h1>
        <h3>Error</h3>
        <h4>{error.status}: {error.statusText}</h4>
    </>)
}