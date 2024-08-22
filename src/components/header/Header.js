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
                    <li>Home</li>
                    <li>Food</li>
                    <li>Contact Us</li>
                    <li>About</li>
                    <li>Offers</li>
                </ul>
            </div>
        </div>    
    </>)
}