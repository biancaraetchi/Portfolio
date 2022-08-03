import { useEffect } from 'react';
import { useState } from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    const [show, setShow] = useState(0);
    const [list, setList] = useState([]);
    useEffect(() => {
        let bar = document.getElementById("sidebar");
        if (props.rotation == 1) {
            bar.style.left = "0px";
        } else {
            bar.style.left = "-310px";
        }
    })

    function colorCheck(){
        if(document.getElementById("color").checked){
            document.getElementById("colorSelection").disabled = false;
        }
        else{
            document.getElementById("colorSelection").disabled = true;   
        }
    }

    async function handleSubmit(e){
        e.preventDefault();
        let element = document.getElementById("led");
        let element2 = document.getElementById("color");

        let prop1 = false;
        let prop2 = false;
        let prop3 = null;
        if(element.checked){
            prop1 = true;
        }
        if(element2.checked){
            prop2 = true;
            let element3 = document.getElementById("colorSelection");
            prop3 = element3.value;
        }

        props.filterValues([prop1, prop2, prop3]);
    }

    return (
        <div className="Sidebar" id='sidebar'>
            <h3>Filter the lamps:</h3>
            <form onSubmit={handleSubmit}>
                <div className="wrapper">
                    <div className="line">
                        <input type="checkbox" id="led"/>
                        <span className='custom'></span>
                        <label htmlFor="led">Only LED</label>
                    </div>
                    <div className="line">
                        <input onClick={colorCheck} type="checkbox" id="color"/>
                        <span className='custom'></span>
                        <label htmlFor="color">Color</label>
                        <select disabled name="color" id="colorSelection">
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="orange">Orange</option>
                        </select>
                    </div>
                    {/* <div className="line">
                        <input type="checkbox" id="other" />
                        <span className='custom'></span>
                        <label htmlFor="other">LED lamps</label>
                    </div> */}
                </div>
                <input type="submit" value="Filter" id="filter" />
            </form>
        </div>
    );
}
export default Sidebar;