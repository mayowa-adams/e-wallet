import "../Landing.css"

const vendorSignUp = () => {
    return (
        <section className="sign-up">
            <div className="wrapper">
                <form action="/signUpVendor">
                    <h3 className="greetings">Get started</h3>
                    <div className="form-action">
                        <input type="email" id="email" placeholder="Email" required/>
                    </div>
                    <div className="form-action">
                        <input type="password" id="pwd" placeholder="Password" required/>
                    </div>
                    <div className="form-action">
                        <input type="password" id="pwd2" placeholder="Confirm Password" required/>
                    </div>
                    <div className="text-centered">
                        <p>Or signup with</p>
                    </div>
                    <div className="button-icons">
                        <button className="icon"></button>
                        <button className="icon"></button>
                        <button className="icon"></button>
                    </div>
                    <button className="login">Continue</button>
                    <p className="link">Already have an account? <a href="/logIn">LOG IN</a></p>
                </form>
            </div>
        </section>
    )
}

export default vendorSignUp
