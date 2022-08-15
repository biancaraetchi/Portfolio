import Homebar from "./Homebar";
import Welcome from "./Welcome";
import { useState } from "react";
import Footer from "./Footer";
import React from "react";
import { useEffect } from "react";

const Fullpage = (props) => {
    const [filterValues, setFilterValues] = useState([false, false, null]);
    const [changedURL, setChangedURL] = useState(0);
    const [internalPage, setInternalPage] = useState("main");

    const changeItems = function (number) {
        props.setTotalItems(props.totalItems + number);
    }
    var particleNr = 50;

    useEffect(() => {
        if (window.location.pathname.includes("about")) {
            setInternalPage("about");
        }
        let container = document.getElementsByClassName("container")[0];
        let observer = new ResizeObserver((entries) => {
            let element = entries[0];
            if (element.contentRect.height === 0) {
                if (element.target.className.includes("About")) {
                    switchToHome();
                }
                else {
                    switchToAbout();
                }
            }
            else {
                container.style.height = element.contentRect.height + 100 + "px";
                container.style.height = element.contentRect.height + 100 + "px";
                container.style.overflow = "hidden";
            }
        })
        let mainContent = document.getElementsByClassName("mainContent");
        if (mainContent[0] == null) {
            switchToAbout();
        }
        else {
            switchToHome();
        }
        function switchToAbout() {
            observer.disconnect();
            let whatever = document.getElementsByClassName("About");
            if (checkExistence(whatever[0])){
            observer.observe(whatever[0]);
            }
        }
        function switchToHome() {
            observer.disconnect();
            if(checkExistence(mainContent[0])){
            observer.observe(mainContent[0]);}


        }
        function checkExistence(element) {
            return element != null;
        }
        props.floatingParticles(setChangedURL, "canvas1", particleNr, 0, 0);
        props.floatingParticles(setChangedURL, "canvas2", particleNr, 0, 0);
    }, [changedURL]);
    return (
        <div className="Fullpage">
            <Welcome floatingParticles={props.floatingParticles} />

            <Homebar setInternalPage={setInternalPage} filterValues={setFilterValues} totalItems={props.totalItems} />
            <div className="container">
                <canvas id="canvas1" ></canvas>
                {React.cloneElement(props.children, { lamps: props.lamps, filterValues: filterValues, setTotalItems: changeItems, totalItems: props.totalItems })}
                <canvas id="canvas2" ></canvas>
            </div>
            <Footer />
        </div>
    );
}

export default Fullpage;