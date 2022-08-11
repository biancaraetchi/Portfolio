import './Homebar.css';
import { useState } from 'react';
import Cart from './Cart';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const Homebar = (props) => {
    const [rotation, setRotation] = useState(0);
    const rotateMenu = () => {
        if (document.readyState === "complete") {
            let icon = document.getElementById("hamburgerMenu");
            if (rotation == 0) {
                icon.style.transform = "rotate(-90deg)";
                setRotation(1);
            }
            else {
                icon.style.transform = "";
                setRotation(0);
            }
        }
    }
    return (
        <div className="Homebar">
            <i className="icon" id="hamburgerMenu" onClick={rotateMenu}></i>
            <ul>
                <li><Link to='/Portfolio/about' onClick={() => {props.setInternalPage("about")}}>About</Link></li>
                <li><Link to='/Portfolio/login'>Login</Link></li>
            </ul>
            <Cart totalItems={props.totalItems} />
            <Sidebar filterValues={props.filterValues} rotation={rotation} />
        </div>
    );
}

export default Homebar;