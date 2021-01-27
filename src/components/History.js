import React from 'react';
import Transaction from "components/Transaction";

function History({ transactions }) {

    return (
      <article>
        <h3>History</h3>
        <section id="historyList" className="list">
            {transactions && transactions.map((transaction) => {
                return (
                    <Transaction
                        key={transaction.id}
                        transactionObj={transaction}
                    />
                )
            })}
        </section>
      </article>
    );
}

export default History
