import './Welcome.css';
import { useEffect, useState } from 'react';
import whiteSparkle from './Artsystuff/whiteSparkle.png';
import yellowSparkle from './Artsystuff/yellowSparkle.png';

const Welcome = (props) => {
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);
    const [changedURL, setChangedURL] = useState(0);
    var [number, setNumber] = useState(0);

    const handleHover = (e) => {
        setTimeout(function () {
            setX(e.pageX);
            setY(e.pageY);

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

    useEffect(() => props.floatingParticles(setChangedURL, "myCanvas", 50, 1, 1), []);

    
    return (
        <div className="Welcome" onMouseMove={handleHover}>
            <img id="whiteImage" src={whiteSparkle} alt="wtf"></img>
            <img id="yellowImage" src={yellowSparkle} alt="wtf"></img>
            <div className="particle">
                <div className="leftover"></div>
            </div>
            <div className="background">
                <h1 className="title2">Welcome to <span className='color'>Lamps</span></h1>
                <div className="content">
                    <h1 className="title">Welcome to <span className='color'>Lamps</span></h1>
                </div>
            </div>
            <canvas id="myCanvas"></canvas>
        </div>
    );
}

export default Welcome;