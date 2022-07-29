import MainContent from "./MainContent";
import Homebar from "./Homebar";
import Welcome from "./Welcome";
import { useState } from "react";
import Footer from "./Footer";
import { useEffect } from "react";

const Fullpage = (props) => {
    const [totalItems, setTotalItems] = useState(0);
    const [filterValues, setFilterValues] = useState([false, false, null]);

    const changeItems = function (number) {
        setTotalItems(totalItems + number);
    }
    var particleNr = 50;

    useEffect(() => {
        props.floatingParticles("canvas1", particleNr, 0, 0);
        props.floatingParticles("canvas2", particleNr, 0, 0);
    }, []);

    return (
        <div className="Fullpage">
            <Welcome floatingParticles={props.floatingParticles} />

            <Homebar filterValues={setFilterValues} totalItems={totalItems} />
            <div className="container">
                <canvas id="canvas1" ></canvas>
                <MainContent filterValues={filterValues} setTotalItems={changeItems} totalItems={totalItems} />
                <canvas id="canvas2" ></canvas>
            </div>
            <Footer />
        </div>
    );
}

export default Fullpage;