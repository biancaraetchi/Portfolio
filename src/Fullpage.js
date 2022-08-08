import MainContent from "./MainContent";
import Homebar from "./Homebar";
import Welcome from "./Welcome";
import { useState } from "react";
import Footer from "./Footer";
import { useEffect } from "react";

const Fullpage = (props) => {
    const [filterValues, setFilterValues] = useState([false, false, null]);
    const [changedURL, setChangedURL] = useState(0);

    const changeItems = function (number) {
        props.setTotalItems(props.totalItems + number);
    }
    var particleNr = 50;

    useEffect(() => {
        let container = document.getElementsByClassName("container")[0];
        let observer = new ResizeObserver((entries) => {
            let element = entries[0];
            container.style.height = element.contentRect.height+100 + "px";
            container.style.overflow = "hidden";
        })
        let mainContent = document.getElementsByClassName("mainContent");
        observer.observe(mainContent[0]);
        props.floatingParticles(setChangedURL, "canvas1", particleNr, 0, 0);
        props.floatingParticles(setChangedURL, "canvas2", particleNr, 0, 0);
    }, [changedURL]);

    return (
        <div className="Fullpage">
            <Welcome floatingParticles={props.floatingParticles} />

            <Homebar filterValues={setFilterValues} totalItems={props.totalItems} />
            <div className="container">
                <canvas id="canvas1" ></canvas>
                <MainContent lamps={props.lamps} filterValues={filterValues} setTotalItems={changeItems} totalItems={props.totalItems} />
                <canvas id="canvas2" ></canvas>
            </div>
            <Footer />
        </div>
    );
}

export default Fullpage;