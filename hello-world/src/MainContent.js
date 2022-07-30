import { useState, useEffect } from 'react';
import './MainContent.css';
import image from './Artsystuff/lamp1.png';
import image2 from './Artsystuff/lamp2.png';
import image0 from './Artsystuff/all_text.png';
import image3 from './Artsystuff/lamp7.png';
import { Link } from 'react-router-dom';


const MainContent = (props) => {
    const [images, setImages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(0);
    const selection = [0, 1, 2, 3];
    const[slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
        setImages(document.getElementsByClassName('lampImg'));
        setIsLoaded(1);
    }, [slideIndex]);

    const addItems = (number) => {
        props.lamps[number - 1].items += 1;
        props.setTotalItems(1);
        let string = "#postCart" + number;
        let string2 = "#postItems" + number;
        let icon = document.querySelector(string);
        let items = document.querySelector(string2);
        items.style.display = "block";
        icon.style.boxShadow = "2px 2px 7px rgba(252, 243, 6, 0.2), -2px -2px 7px rgba(252, 243, 6, 0.2), 0px 0px 2px rgba(0,0,0,0.2)";
        let iconTotal = document.getElementById("Cart");
        var itemsTotal = document.getElementById("items");
        itemsTotal.style.display = "block";
        iconTotal.style.boxShadow = "2px 2px 7px rgba(252, 243, 6, 0.2), -2px -2px 7px rgba(252, 243, 6, 0.2), 0px 0px 2px rgba(0,0,0,0.2)";
    }

    const removeItems = (number) => {
        if (props.lamps[number - 1].items !== 0) {
            props.lamps[number - 1].items -= 1;
            props.setTotalItems(-1);
        }
        if (props.lamps[number - 1].items === 0) {
            let string = "#postCart" + number;
            let string2 = "#postItems" + number;
            let icon = document.querySelector(string);
            let items = document.querySelector(string2);
            items.style.display = "none";
            icon.style.boxShadow = "2px 2px 7px rgba(0,0,0,0.1), -2px -2px 7px rgba(0,0,0,0.1)";
        }
        if (props.totalItems === 1) {
            let iconTotal = document.getElementById("Cart");
            let itemsTotal = document.getElementById("items");
            itemsTotal.style.display = "none";
            iconTotal.style.boxShadow = "2px 2px 7px rgba(0,0,0,0.1), -2px -2px 7px rgba(0,0,0,0.1)";
        }
    }

    showImage(1);

    function plusDivs(n) {
        setSlideIndex(slideIndex + n);
        showImage(slideIndex+n);
    }

    function showImage(x) {
        if (isLoaded === 1) {
            if (x > images.length) {
                setSlideIndex(1);
            }
            if (x < 1) {
                setSlideIndex(images.length);
            }
            for (let i = 0; i < images.length; i++) {
                images[i].style.display = "none";
            }
            images[slideIndex - 1].style.display = "block";
        }
    }

    return (
        <div className="mainContent">
            <div className="choose">
                <h2>Choose the style of your Lamp </h2>
                <div className="slide">
                    <button id="left" onClick={() => plusDivs(-1)}></button>
                    <img src={image0} alt="All lamps" className="lampImg" />
                    <img className='lampImg' src={image} alt="Floor lamps" />
                    <img className='lampImg' src={image2} alt="Table lamps" />
                    <img src={image3} alt="Wall lamps" className="lampImg" />
                    <button id="right" onClick={() => plusDivs(1)}></button>
                </div>
            </div>
            <div className="gallery">
                {props.lamps.map((lamp) => {
                    let cardDisplay = {display:"none"};
                    let chooseDisplay = {display:"none"};
                    let passProp1 = true;
                    let passProp2 = true;
                    let chooseBox = {boxShadow:"2px 2px 7px rgba(0,0,0,0.1), -2px -2px 7px rgba(0,0,0,0.1)"};
                    
                    if(lamp.items !== 0){
                        chooseDisplay.display = "block";
                        chooseBox.boxShadow = "2px 2px 7px rgba(252, 243, 6, 0.2), -2px -2px 7px rgba(252, 243, 6, 0.2), 0px 0px 2px rgba(0,0,0,0.2)";
                    }

                    if(props.filterValues[0] && !lamp.prop1){
                        passProp1 = false;
                    }

                    if(props.filterValues[1] && !lamp.prop2.includes(props.filterValues[2])){
                        passProp2 = false;
                    }

                    if ((lamp.type === selection[slideIndex-1] || slideIndex === 1) && passProp1 && passProp2){
                        cardDisplay.display = "block";
                    }
                    return (
                        <div key={lamp.id} style={cardDisplay}>
                        {
                        <div className="card">
                            <div className="lamp" style={{ backgroundImage: `url('${lamp.backimage}')` }}></div>
                            <div className="text">
                                <h3>{lamp.title}</h3>
                                <br />
                                <div className="wrap">
                                    <ul>
                                        {lamp.prop1 ? <li>LED</li> : <li>Not LED</li>}
                                        <li>Colors available: {lamp.prop2}</li>
                                    </ul>
                                    <div className="cartIcon">
                                        <Link to="/cart" >
                                            <div className="cartButton" style={chooseBox} id={'postCart' + lamp.id}>
                                                <div className="items" style={chooseDisplay} id={"postItems" + lamp.id}>{lamp.items}</div>

                                            </div>
                                        </Link>
                                        <div className="plusMinus">
                                            <span className='minusSpan' id={'minus' + lamp.id} onClick={() => removeItems(lamp.id)}>−</span>
                                            <span className="plusSpan" id={'plus' + lamp.id} onClick={() => addItems(lamp.id)}>+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       }
                        </div>);
                })}
            </div>

        </div >
    );
}

export default MainContent;