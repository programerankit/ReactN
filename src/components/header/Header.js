import { NavLink } from "react-router-dom";
import { logo } from "../../utils";
import './header.css';
export const Hearder=()=>{
    return(<>
        <div className="header-div">
            <div className="logo-div">
                <img className="logo" src={logo}/>
            </div>
            <div className="nav-list">
                <ul className="ul-list">
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