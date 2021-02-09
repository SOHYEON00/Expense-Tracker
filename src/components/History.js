import React from 'react';
import Transaction from "components/Transaction";

function History({ transactions }) {

    const copyTransactions = transactions.concat();

    copyTransactions.sort((a, b) => { //sorting by date (desc)
      return a.date > b.date ? -1 : 1;
    });


    return (
      <article id="historyComponent" className="mainContainer">
        <section>
        <h3>History</h3>
        
          {copyTransactions &&
            copyTransactions.map((transaction, idx) => {
              let isNewDate = true;
              if (idx === 0) {
                //맨 최근 거래내역 날짜 추가 위한 조건문
                isNewDate = true;
              } else if (idx > 0 && idx < copyTransactions.length - 1) {
                if (transaction.date !== copyTransactions[idx - 1].date) {
                  isNewDate = true;
                } else {
                  isNewDate = false;
                }
              }
              return (
                <Transaction
                  key={transaction.id}
                  transactionObj={transaction}
                  isNewDate={isNewDate}
                />
              );
            })}
        </section>
        
      </article>
    );
}

export default History
