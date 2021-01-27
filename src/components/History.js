import React from 'react';
import Transaction from "components/Transaction";

function History({ transactions }) {

    const copyTransactions = transactions.concat();
    copyTransactions.sort((a,b) => {return (a.date > b.date) ? -1 : 1})

    return (
      <article>
        <h3>History</h3>
        <section id="historyList" className="list">
            {copyTransactions && copyTransactions.map((transaction) => {
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
