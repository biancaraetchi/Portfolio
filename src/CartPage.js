import './CartPage.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const CartPage = (props) => {
    useEffect(() => {
    }, [])
    return (
        <div className="flexWrapper">
            <div className="formBlock">
                <div className="allCart">
                    <div className="allItems">
                        <h3>The following items are in your cart:</h3>
                        {props.lamps.map((lamp) => {
                            let ifDisplayed = { display: "none" };
                            if (lamp.items !== 0) {
                                ifDisplayed.display = "flex";
                            }

                            return (
                                <div className="item" key={lamp.id} style={ifDisplayed}>
                                    <div className="image">
                                        <img src={lamp.backimage} alt="f" />

                                    </div>
                                    <div className="text">

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="totalCheckout"></div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;