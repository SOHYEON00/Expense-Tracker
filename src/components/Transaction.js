import React from "react";
import DeleteButton from "utilities/DeleteButton";
import { TRANSACTIONS } from "fBase";

function Transaction({ transactionObj, isLine }) {
  const type = transactionObj.type;
  let colorByType = "";
  const line = '-------';

  if (type === "수입") {
    colorByType = "moneyPlus";
  } else if (type === "지출") {
    colorByType = "moneyMinus";
  }

  return (
    <>
    
    <div className={colorByType}>
      
      <DeleteButton formType={TRANSACTIONS} itemId={transactionObj.id} />
      {transactionObj.date}
      {transactionObj.text}
      {transactionObj.amount}
    </div>{(isLine === true) && line}
    </>
  );
}

export default Transaction;
