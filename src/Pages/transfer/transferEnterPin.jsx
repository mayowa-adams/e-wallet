import "../Landing.css"

const transferEnterPin = () => {
    return (
        <section className="login">
            <div>
                <img src="" alt=""/>
                <div>
                    <p>Hello, ... </p>
                    <p>Welcome back 👋</p>
                </div>
            </div>

            <div>
                <p>Available Balance</p>
                <p>N1,2000</p>
            </div>

            <div>
                <div>
                    <div></div>
                    <p>Transfer</p>
                </div>
                <div>
                    <div></div>
                    <p>Fund</p>
                </div>
                <div>
                    <div></div>
                    <p>Withdraw</p>
                </div>
            </div>

            {/* overlay container */}
            <div>
                <div></div>
                
                <p>Enter your pin</p>

                <form>
                    <label>Enter your pin</label>
                    <input type="number"/>
                    <input name="amount" type="number"/>
                    <input type="number"/>
                </form>

                <p>Transfering ... to ...</p>

                <button>Transfer</button>
            </div>
        </section>
    )
}

export default transferEnterPin