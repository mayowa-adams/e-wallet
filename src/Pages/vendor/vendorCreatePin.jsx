import "../Landing.css"

const vendorCreatePin = () => {
    return (
        <section className="login">
            <div className="wrapper">
                <div>
                    <h1>Create Pin</h1> 
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
                    <p className="link">Enter A 4-Digit Pin</p>
                </div>
                <button className="login">Continue</button>
            </div>
        </section>
    )
}

export default vendorCreatePin