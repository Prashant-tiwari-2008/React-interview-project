import React from 'react'

const Emi = () => {
    return (
        <div>
            <div>
                <h3>Total Cost of Asset</h3>
                <input />
            </div>
            <div>
                <h3>Interest Rate (in %)</h3>
                <input />
            </div>
            <div>
                <h3>Processing Fee (in %)</h3>
                <input />
            </div>

            <div>
                <h1>Down Payment</h1>
                <h3>Total Down Payment - $ {'Money'}</h3>
                <div className="slidecontainer">
                    <input type="range" min="1" max="100" className="slider" id="myRange" />
                </div>
            </div>

            <div>
                <h1>Load per Month</h1>
                <h3>Total Loan Payment - $ {'Money'}</h3>
                <div className="slidecontainer">
                    <input type="range" min="1" max="100" className="slider" id="myRange" />
                </div>
            </div>

            <div classNameName='chipContainer'>
                <h1>Tenure</h1>
                <div className="chipContainer">
                    <h3 className="chip">12</h3>
                    <h3 className="chip">24</h3>
                    <h3 className="chip">36</h3>
                    <h3 className="chip">48</h3>
                    <h3 className="chip">60</h3>
                    <h3 className="chip">72</h3>
                </div>
            </div>
        </div>
    )
}

export default Emi