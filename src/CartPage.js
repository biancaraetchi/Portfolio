import './CartPage.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const CartPage = (props) => {
    useEffect(() => {
    }, []);
    var total = 0;
    props.lamps.map((lamp) =>{
        total += lamp.items*lamp.price;
    })

    return (
        <div className="flexWrapper">
            <div className="formBlock">
                <div className="allCart">
                    <div className="allItems">
                        {total !== 0 ? <h3>The following items are in your cart:</h3> : <h3>You have no items in your cart.</h3>}
                        {total !== 0 && props.lamps.map((lamp) => {
                            return (
                                lamp.items !== 0 && <div className="item" key={lamp.id} >
                                    <div className="image">
                                        <img src={"./" + lamp.backimage} alt="f" />
                                    </div>
                                    <div className="text">
                                        <h4>{lamp.title}</h4>
                                        <ul>
                                            {lamp.prop1 ? <li>LED</li> : <li>Not LED</li>}
                                            <li>Colors available: {lamp.prop2}</li>
                                        </ul>
                                        <p>Price: €{lamp.price} x {lamp.items} = <span className="underline">€{(lamp.price * lamp.items).toFixed(2)}</span></p>                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="totalCheckout">
                        <h2>Total to checkout:</h2>
                        <ul className='haha'>
                            {
                                props.lamps.map((lamp) => {
                                    return(
                                    lamp.items !== 0 && <li key={lamp.id}><i>{lamp.title}</i> x {lamp.items} = <span className="underline">€{(lamp.price * lamp.items).toFixed(2)}</span></li> 
                                )})
                            }
                        </ul>
                        <p>Total to pay: <span className="underline">€{total.toFixed(2)}</span></p>
                        <div className="flex-wrapper">
                        {total !== 0 && <Link to="/Portfolio/payment"><button>Proceed to payment</button></Link>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;