const Signup = () => {

    function handleSubmission(e) {
        e.preventDefault();
    }

    return (
        <div className="flexWrapper Signup">
            <div className="formBlock">
                <h3><span className='color'>Sign up</span> for your account:</h3>
                <form action="" onSubmit={handleSubmission}>
                    <div className="line">
                        <label htmlFor="email">Email:</label>
                        <input required pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" type="text" id="email" />
                    </div>
                    <div className="line">
                        <label htmlFor="password">Password:</label>
                        <input required minLength="8" type="password" id="password" />
                    </div>
                    <div className="line">
                        <label htmlFor="password">Confirm password:</label>
                        <input required minLength="8" type="password" id="password" />
                    </div>
                    <div className="submit-wrapper">
                        <input type="submit" id='submit' value="Log in"></input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;