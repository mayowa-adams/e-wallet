import "../Landing.css"

const vendorLogin = () => {
    return (
        <section className="login">
            <div className="wrapper">
                <form action="/vendorLogin">
                    <h3 className="greetings">Hi, Welcome back  👋</h3>
                    <div className="form-action">
                        <input type="email" id="email" placeholder="Email" required/>
                    </div>
                    <div className="form-action">
                        <input type="password" id="pwd" placeholder="Password" required/>
                    </div>
                    <div className="text-centered">
                        <p>Or login with</p>
                    </div>
                    <div className="button-icons">
                        <button className="icon"></button>
                        <button className="icon"></button>
                        <button className="icon"></button>
                    </div>
                    <button className="login">Continue</button>
                    <p className="link">Don't have an account? <a href="/logIn">SIGN UP</a></p>
                </form>
            </div>
        </section>
    )
}

export default vendorLogin

