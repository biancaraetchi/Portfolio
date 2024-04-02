import './Cart.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    useEffect(() => {
        var items = document.getElementById("items");
        if(props.totalItems === 0){
            items.style.display = "none";
        }
    }, [])

    return (
        <Link to="/Portfolio/cart">
            <div className="Cart" id="Cart">
                <div className="items" id="items">{props.totalItems}</div>
            </div>
        </Link>
    );
}

export default Cart;