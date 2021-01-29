import React from 'react';
import Transaction from "components/Transaction";

function History({ transactions }) {

    const copyTransactions = transactions.concat();

    copyTransactions.sort((a, b) => { //sorting by date (desc)
      return a.date > b.date ? -1 : 1;
    });

    return (
      <article>
        <section id="historyList" className="list">
            {copyTransactions && copyTransactions.map((transaction,idx) => {
                let isLine = false;
                if(idx < copyTransactions.length-1){
                  if (transaction.date !== copyTransactions[idx + 1].date) {
                    isLine = true;
                  }
                }
                return (
                    <Transaction
                        key={transaction.id}
                        transactionObj={transaction}
                        isLine={isLine}
                    />
                    
                )
            })}
            
        </section>
      </article>
    );
}

export default History
