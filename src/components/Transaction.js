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
  console.log(isLine);
  return (
    <>
      {!isLine ? <p className="date">{transactionObj.date}</p> : ""}
      <div className={`${colorByType} transactionContainer`}>
        {/* <div className="buttonContainer">
          <DeleteButton formType={TRANSACTIONS} itemId={transactionObj.id} />
          <DeleteButton formType={TRANSACTIONS} itemId={transactionObj.id} />
        </div> */}
        <div className="textContainer">
          <span className="text">
            {transactionObj.text}
            <span className="category">{transactionObj.category}</span>
          </span>
          <span className="amount">{transactionObj.amount}원</span>
        </div>
      </div>
    </>
  );
}

export default Transaction;
