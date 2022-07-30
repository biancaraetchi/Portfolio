import { useEffect } from "react";

const CartPage = (props) => {
    useEffect(() => {
    },[])
    return ( 
        <div className="CartPage">
            {props.lamps.map((lamp) => {
                return(
                    <p key={lamp.id}>{lamp.items}</p>
                )
            })}
        </div>
     );
}
 
export default CartPage;