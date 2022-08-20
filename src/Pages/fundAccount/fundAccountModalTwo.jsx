import "../Landing.css"

const fundAccountModalTwo = () => {
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
                <div><p></p></div>

                <h2>Fund Account</h2>

                <form>
                    <label for="fund_account_amount">Amount</label>
                    <input id="fund_account_amount" name="card_holder_name" type="number"/>
                    <label for="fund_account_card_pin">Card Pin</label>
                    <input id="fund_account_card_pin" name="card_number" type="number"/>
                </form>

                <button>Fund Account</button>
            </div>
        </section>
    )
}

export default fundAccountModalTwo