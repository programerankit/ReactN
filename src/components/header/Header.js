import { NavLink } from "react-router-dom";
import { logo } from "../../utils";
import './header.css';
import { useInternetStatus } from "../../utils/Custom hock/useInternetStatus";
export const Hearder=()=>{
    const internetStatus=useInternetStatus()
    
    return(<>
        <div className="header-div">
            <div className="logo-div">
                <img className="logo" src={logo}/>
            </div>
            <div className="nav-list">
                <ul className="ul-list">
                    <li>{internetStatus==false?"🔴":"🟢"}</li>
                    <NavLink to={'/home'} className={({isActive})=>isActive?"red":"white"}>Home</NavLink>
                    <NavLink to={'/food'} className={({isActive})=>isActive?"red":"white"}>Food</NavLink>
                    <NavLink to={'/contactus'} className={({isActive})=>isActive?"red":"white"}>Contact us</NavLink>
                    <NavLink to={'/about'} className={({isActive})=>isActive?"red":"white"}>About</NavLink>
                    <NavLink to={'/card'} className={({isActive})=>isActive?"red":"white"}>Card</NavLink>
                </ul>
            </div>
        </div>    
    </>)
}