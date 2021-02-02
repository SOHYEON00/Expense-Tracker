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

  const total = (income - expense > 0) ? `+${income - expense}` : `${income - expense}`;

  return (
    <article className="balanceComponent">
      <section className="balance" >
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
