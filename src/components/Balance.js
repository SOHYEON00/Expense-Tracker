import React from "react";
import numToString from 'utilities/printComma';

function Balance({ transactions }) {
  const copyTransactions = transactions.concat();

    const total = numToString(copyTransactions
                      .map((e) => {
                          let returnedAmount = 0;
                          if(e.type === '수입') { returnedAmount = +e.amount}
                          else if(e.type === '지출') { returnedAmount = -e.amount}
                          return returnedAmount
                      }) // return amount with +/- set by type
                      .reduce((acc, cur) => (acc += cur), 0)); //get total
  

  const income = numToString(copyTransactions
    .filter((e) => e.type === "수입") //filter by type
    .map((e) => parseInt(e.amount)) // return only amount which is changed string to int
    .reduce((acc, cur) => (acc += cur), 0)); //get total

  const expense = numToString(copyTransactions
    .filter((e) => e.type === "지출")
    .map((e) => parseInt(e.amount))
    .reduce((acc, cur) => (acc += cur), 0));

    

  return (
    <article className="balanceComponent">
      <section className="balance">
        <p className="name">YOUR BALANCE</p>
        <p id="money">{total}원</p>
      </section>
      <div>
        <section className="each income">
          <p className="name">INCOME</p>
          <p id="moneyPlus" className="money plus">
            +{income}원
          </p>
        </section>
        <section className="each expense">
          <p className="name">EXPENSE</p>
          <p id="moneyMinus" className="money minus">
            -{expense}원
          </p>
        </section>
      </div>
    </article>
  );
}

export default Balance;
