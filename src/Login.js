import './Login.css';
import { Link } from 'react-router-dom';

const Login = (props) => {
    function handleSubmission(e) {
        e.preventDefault();
    }
    return (
            <div className="flexWrapper">
                <div className="formBlock">
                    <h3><span className='color'>Log in</span> to your account:</h3>
                    <form className="withMargin"action="" onSubmit={handleSubmission}>
                        <div className="line">
                            <label htmlFor="email">Email:</label>
                            <input required pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" type="text" id="email" />
                        </div>
                        <div className="line">
                            <label htmlFor="passwordLogin">Password:</label>
                            <input required minLength="8" type="password" id="passwordLogin" />
                        </div>
                        <div className="submit-wrapper">
                            <input type="submit" id='submit' value="Log in"></input>
                        </div>
                    </form>
                    <div className="noAccount">
                        <Link to="/Portfolio/signup">No account yet? <span className='underline'>Sign up now</span></Link>
                    </div>
                </div>
            </div>
    );
}

export default Login;