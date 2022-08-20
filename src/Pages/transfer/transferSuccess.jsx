import "../Landing.css"

const TransferSuccess= () => {
    return (
        <section className="login">
            <div></div>
            <div>
                <p>Successful</p>
                <p>You have transferred ... to ... </p>
                <p><a>view receipt</a></p>
            </div>
            <button>Send Again</button>
        </section>
    )
}

export default TransferSuccess