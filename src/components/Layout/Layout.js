import { Outlet } from "react-router-dom";
import { Hearder,Footer } from "../../utils/index";
export const Layout=()=>{
    return(<>
        <Hearder/>
        <Outlet/>
        <Footer/>
    </>)
}