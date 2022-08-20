import "../Landing.css"

const fundAccountModal = () => {
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
                    <label for="fund_account_name">Card Holder Name</label>
                    <input id="fund_account_name" name="card_holder_name" type="text"/>
                    <label for="fund_account_card">Card Number</label>
                    <input id="fund_account_card" name="card_number" type="number"/>
                    <div>
                       <label for="fund_expiry_date">Expiry Date</label>
                        <input id="fund_expiry_date" name="expiry_date" type="number"/>
                        <label for="fund_cvv">CVV</label>
                        <input id="fund_cvv" name="cvv_number" type="number"/> 
                    </div>
                    
                </form>

                <button>Continue</button>
            </div>
        </section>
    )
}

export default fundAccountModal