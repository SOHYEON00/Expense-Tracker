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
              // if (idx === 0) {
              //   //맨 최근 거래내역 날짜 추가 위한 조건문
              //   isNewDate = true;
              // } else  -> 이미 위에서 true라고 선언해 줬는데 굳이..? 잘 작동함.

              if (idx > 0 && idx < copyTransactions.length - 1) { //거래 index가 처음과 마지막이 아닌 경우
                if (transaction.date !== copyTransactions[idx - 1].date) {
                  isNewDate = true; //날짜 출력 o
                } else {
                  isNewDate = false; //날짜 출력 x
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
