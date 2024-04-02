import './Payment.css';
import whiteSparkle from './Artsystuff/whiteSparkle.png';

const Payment = () => {
    return ( 
        <div className="flexWrapper">
            <div className="Payment">
                <div className="image">
                    <img src={whiteSparkle} alt="image" />
                </div>
                <div className="loading">
                    <span>*Loading</span>
                    <div className="dot">.</div>
                    <div className="dot">.</div>
                    <div className="dot">.</div>
                </div>
            </div>
            <div className="unfortunateMessage">
                <span>*I'm a frontend developer atm, so there's no further payment handling screen. Feel free to enjoy the animation tho!</span>
            </div>
        </div>
     );
}
 
export default Payment;