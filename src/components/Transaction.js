import React from "react";
import DeleteButton from "components/DeleteButton";

function Transaction({ transactionObj, isLine }) {
  const type = transactionObj.type;
  let colorByType = "";
  const line = '-------';

  if (type === "수입") {
    colorByType = "moneyPlus";
  } else if (type === "지출") {
    colorByType = "moneyMinus";
  }
console.log(isLine);
  return (
    <>
    
    <div className={colorByType}>
      
      <DeleteButton transactionId={transactionObj.id} />
      {transactionObj.date}
      {transactionObj.text}
      {transactionObj.amount}
    </div>{(isLine === true) && line}
    </>
  );
}

export default Transaction;
