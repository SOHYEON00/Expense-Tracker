import React from 'react'

function Balance() {
    return (
        <article>
            <h3>YOUR BALANCE</h3> 
            <section>
                <h4>수입</h4>
                <p id="moneyPlus" className="money plus"></p>
            </section>
            <section>
                <h4>지출</h4>
                <p id="moneyMinus" className="money minus"></p>
            </section>
        </article>
    )
}

export default Balance
