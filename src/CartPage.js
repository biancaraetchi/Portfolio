import './CartPage.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const CartPage = (props) => {
    useEffect(() => {
    }, [])
    return (
        <div className="flexWrapper">
            <div className="formBlock">
                <img src="./Artsystuff/lamp2.png" alt="oops" />
                <h3>The following items are in your cart:</h3>
                <div className="cartContainer">
                    {props.lamps.map((lamp) => {
                        let chooseIfDisplay = { display: "block" };
                        if (lamp.items === 0) {
                            chooseIfDisplay.display = "none";
                        }
                        return (
                            <div className="listItemsInCart" key={lamp.id} style={chooseIfDisplay}>
                                <img src={lamp.backimage} alt={lamp.title} className="smallImage" />
                                <div className="cartText">
                                    <h4>{lamp.title}</h4>
                                    <ul>
                                        {lamp.prop1 ? <li>LED</li> : <li>Not LED</li>}
                                        <li>{lamp.prop2}</li>
                                    </ul>
                                    <b>{lamp.items} x €{lamp.price} = €{lamp.items*lamp.price}</b>
                                </div>
                            </div>)
                    })}
                    <div className="checkout">
                        <h4>Total to checkout:</h4>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default CartPage;