import "../Landing.css"

const transferModal = () => {
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

                <p>Transfer</p>

                <form>
                    <label for="transfer_tag">Account Tag</label>
                    <input id="transfer_tag" name="account_tag" type="text"/>
                    <label for="transfer_amount">Amount</label>
                    <input id="transfer_amount" name="amount" type="text"/>
                    <label for="transfer_comment">Comment</label>
                    <input id="transfer_comment" name="comment" type="text"/>
                </form>

                <button>Continue</button>
            </div>
        </section>
    )
}

export default transferModal