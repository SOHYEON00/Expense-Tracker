import React from "react";

function Balance({ transactions }) {
  const copyTransactions = transactions.concat();

//   const total = copyTransactions
//                     .map((e) => {
//                         if(e.type === '수입') { return +e.amount}
//                         else if(e.type === '지출') { return -e.amount}
//                     }) // return amount with +/- set by type
//                     .reduce((acc, cur) => (acc += cur), 0); //get total 

  const income = copyTransactions
                    .filter((e) => e.type === "수입") //filter by type
                    .map(e => parseInt(e.amount)) // return only amount which is changed string to int 
                    .reduce((acc, cur) => (acc += cur), 0); //get total 

  const expense = copyTransactions
                    .filter((e) => e.type === "지출") 
                    .map(e => parseInt(e.amount))
                    .reduce((acc, cur) => (acc += cur), 0);

  const total = income - expense;

  return (
    <article>
      <h3>YOUR BALANCE</h3>
      {total}
      <section>
        <h4>수입</h4>
        <p id="moneyPlus" className="money plus">
          {income}
        </p>
      </section>
      <section>
        <h4>지출</h4>
        <p id="moneyMinus" className="money minus">
          {expense}
        </p>
      </section>
    </article>
  );
}

export default Balance;
