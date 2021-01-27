import React from "react";

function Transaction({ transactionObj }) {
  const type = transactionObj.type;
  let colorByType = "";

  if (type === "수입") {
    colorByType = "moneyPlus";
  } else if (type === "지출") {
    colorByType = "moneyMinus";
  }

  return (
    <div className={colorByType}>
      <button className="deleteBtn">X</button>
      {transactionObj.date}
      {transactionObj.text}
      {transactionObj.amount}
    </div>
  );
}

export default Transaction;
