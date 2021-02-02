import React from 'react';
import Transaction from "components/Transaction";

function History({ transactions }) {

    const copyTransactions = transactions.concat();

    copyTransactions.sort((a, b) => { //sorting by date (desc)
      return a.date > b.date ? -1 : 1;
    });

    return (
      <article className="historyComponent">
        <h3>History</h3>
        <section id="historyList" className="list">
            {copyTransactions && copyTransactions.map((transaction,idx) => {
                let isLine = false;
                if(idx === 0) { //맨 최근 거래내역 날짜 추가 위한 조건문
                  isLine = false;
                }
                else if(idx > 0 && idx < copyTransactions.length-1){
                  if (transaction.date !== copyTransactions[idx - 1].date) {
                    isLine = false;
                  } else {
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
