import React from "react";
import DeleteButton from "utilities/DeleteButton";
import { TRANSACTIONS } from "fBase";

function Transaction({ transactionObj, isLine }) {
  const type = transactionObj.type;
  let colorByType = "";

  if (type === "수입") {
    colorByType = "moneyPlus";
  } else if (type === "지출") {
    colorByType = "moneyMinus";
  }

  return (
    <>
    {!isLine ? <p className="date">{transactionObj.date}</p> : ""}
    <p className={colorByType}>
      
      <DeleteButton formType={TRANSACTIONS} itemId={transactionObj.id} />
      <span className="text">{transactionObj.text}</span>
      <span className="amount">{transactionObj.amount}</span>
    </p>
    </>
  );
}

export default Transaction;
