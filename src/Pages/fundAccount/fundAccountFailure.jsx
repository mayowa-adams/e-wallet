import "../Landing.css"

const fundAccountFailure = () => {
    return (
        <section className="login">
            <div></div>
            <div>
                <p>Failed</p>
                <p>Your attempt to fund your account has failed.</p>
                <p><a>view receipt</a></p>
            </div>
            <button>Try Again</button>
        </section>
    )
}

export default fundAccountFailure 