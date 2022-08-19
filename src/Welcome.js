import './Welcome.css';
import { useEffect, useState } from 'react';
import whiteSparkle from './Artsystuff/whiteSparkle.png';
import yellowSparkle from './Artsystuff/yellowSparkle.png';

const Welcome = (props) => {
    //const [X, setX] = useState(0);
    //const [Y, setY] = useState(0);
    const [changedURL, setChangedURL] = useState(0);
    var [number, setNumber] = useState(0);

    const handleHover = (e) => {
        var X = e.pageX;
        var Y = e.pageY;
        setTimeout(function () {
            const variable = document.querySelector(".content");
            let property = window.getComputedStyle(variable, null).getPropertyValue("-webkit-mask-size").replace("px", "");
            property = property / 2;
            let text = (X - property).toString() + "px " + (Y - property).toString() + "px";
            variable.style['-webkit-mask-position'] = text;
        }, 50);

        setTimeout(() => {
            var left = X.toString() + "px";
            var top = Y.toString() + "px";
            document.querySelector(".particle").style.transform = "translate(" + left + "," + top + ")";

            var object = document.createElement("div");
            object.className = "trail";
            object.id = number;
            setNumber(number + 1);
            object.style.transform = "translate(" + left + "," + top + ")";
            document.querySelector(".Welcome").appendChild(object);
            setTimeout(() => {
                object.remove();
            }, 1000);
        }, 100);
    }

    useEffect(() => {
        if (matchMedia('(pointer:coarse)').matches) {
            changetoLightMode();
        }
        else {
            document.querySelector(".Welcome").addEventListener("mousemove", handleHover);
            let switches = document.querySelectorAll(".containerChangeMode");
            for (let i = 0; i < switches.length; i++) {
                switches[i].addEventListener("click", () => changetoLightMode());
            }
            props.floatingParticles(setChangedURL, "myCanvas", 50, 1, 1)
        }
    }, []);

    function changetoLightMode() {
        let toDelete = document.querySelector(".particle");
        toDelete.remove();
        toDelete = document.querySelector(".content");
        toDelete.remove();
        // console.log(document.querySelector(".Welcome"))
        document.querySelector(".Welcome").removeEventListener("mousemove", handleHover);
        let toChange = document.querySelector(".background");
        document.querySelector("h1").style.color = "black";
        toChange.style.backgroundColor = "transparent";
        toChange.style.backgroundImage = "url('temporary-background.png')";
        toChange.style.backgroundSize = "cover";
        toChange.style.backgroundPosition = "10%";
        document.querySelector(".containerChangeMode").remove();
    }

    return (
        <div className="Welcome" >
            <img id="whiteImage" src={whiteSparkle} alt="wtf"></img>
            <img id="yellowImage" src={yellowSparkle} alt="wtf"></img>
            <div className="particle">
                <div className="leftover"></div>
            </div>
            <div className="background">
                <h1 className="title2" id='firstH1'>Welcome to <span className='color'>Lamps</span></h1>
                <div className="content">
                    <h1 className="title">Welcome to <span className='color'>Lamps</span></h1>
                </div>
            </div>
            <div className="containerChangeMode">
                <div className="changeMode"></div>
                <div className="changeMode"></div>
                <div className="changeMode"></div>

            </div>
            <canvas id="myCanvas"></canvas>
        </div>
    );
}

export default Welcome;