import "../Landing.css"

const studentConfirmPin = () => {
    return (
        <section className="login">
            <div className="wrapper">
                <div>
                    <h1>Confirm Pin</h1> 
                </div>
                <form action="/vendorLogin">
                    <div className="form-action">
                        <input type="number" required/>
                    </div>
                    <div className="form-action">
                        <input type="number" required/>
                    </div>
                    <div className="text-centered">
                        <input type="number" required/>
                    </div>
                </form>
                <div>
                    <p className="link">Re-enter your 4-Digit Pin</p>
                </div>
                <button className="login">Finish</button>
            </div>
        </section>
    )
}

export default studentConfirmPin