import "../Landing.css"

const vendorFinishUp = () => {
    return (
        <section className="sign-up">
            <div className="wrapper">
                <form action="/signUpVendor">
                    <h3 className="greetings">Finish Up</h3>
                    <div className="form-action">
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" placeholder="First Name" required/>
                    </div>
                    <div className="form-action">
                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" placeholder="Last Name" required/>
                    </div>
                    <div className="form-action">
                        <label for="acctTag">Account Tag</label>
                        <input type="text" id="acctTag" placeholder="Account Tag" required/>
                    </div>
                    <div>
                    <input list="services" name="services" placeholder="Services offered"/>
                        <datalist id="services">
                            <option value="Transport ventures"></option>
                            <option value="Food ventures"></option>
                            <option value="Telecommunication ventures"></option>
                            <option value="Hair/Beauty ventures"></option>
                            <option value="Clothing ventures"></option>
                        </datalist>
                    </div>
                    <button className="login">Sign Up</button>
                </form>
            </div>
        </section>
    )
}

export default vendorFinishUp