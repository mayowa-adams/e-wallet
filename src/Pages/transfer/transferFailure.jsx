import "../Landing.css"

const transferFailure= () => {
    return (
        <section className="login">
            <div></div>
            <div>
                <p>Failed</p>
                <p>Transfer of  ₦... to @... has Failed.</p>
                <p><a>view receipt</a></p>
            </div>
            <button>Try Again</button>
        </section>
    )
}

export default transferFailure