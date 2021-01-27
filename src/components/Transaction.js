import React from "react";
import DeleteButton from "components/DeleteButton";

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
      <DeleteButton transactionId={transactionObj.id} />
      {transactionObj.date}
      {transactionObj.text}
      {transactionObj.amount}
    </div>
  );
}

export default Transaction;
