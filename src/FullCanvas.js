import whiteSparkle from './Artsystuff/whiteSparkle.png';
import yellowSparkle from './Artsystuff/yellowSparkle.png';
import{Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './FullCanvas.css';

const FullCanvas = (props) => {
    const [changedURL, setChangedURL] = useState(0);
    var particleNr = 125;
    useEffect(() => {
        props.floatingParticles(setChangedURL, "myCanvas", particleNr, 1, 0);
    }, []);

    return ( 
        <div className="FullCanvas">
            <img id="whiteImage" src={whiteSparkle} alt="wtf"></img>
            <img id="yellowImage" src={yellowSparkle} alt="wtf"></img>
            <canvas id="myCanvas"></canvas>
            <Link to={props.url}><div className="arrow"></div></Link>
            {props.children}
        </div>
     );
}
 
export default FullCanvas;