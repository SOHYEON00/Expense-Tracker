import React from 'react';
import Transaction from "components/Transaction";

function History({ transactions }) {

    const copyTransactions = transactions.concat();
    
    const line = "---------------";
    copyTransactions.sort((a, b) => {
      return a.date > b.date ? -1 : 1;
    });
    console.log(copyTransactions);
    return (
      <article>
        <h3>History</h3>
        <section id="historyList" className="list">
            {copyTransactions && copyTransactions.map((transaction,idx) => {
                let isLine = false;
                if(idx < copyTransactions.length-1){
                  if (transaction.date !== copyTransactions[idx + 1].date) {
                    console.log(transaction.date);
                    console.log(copyTransactions[idx + 1]);
                    isLine = true;
                  }
                } else {
                    isLine = false;
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
