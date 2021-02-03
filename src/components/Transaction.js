import React from "react";
import DeleteButton from "utilities/DeleteButton";
import { TRANSACTIONS } from "fBase";
import numToString from 'utilities/printComma';

function Transaction({ transactionObj, isNewDate }) {
  const type = transactionObj.type;
  let colorByType = "";

  if (type === "수입") {
    colorByType = "moneyPlus";
  } else if (type === "지출") {
    colorByType = "moneyMinus";
  }

  return (
    <>
      {isNewDate ? <p className="date">{transactionObj.date}</p> : ""}
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
          <span className="amount">{numToString(transactionObj.amount)}원</span>
        </div>
      </div>
    </>
  );
}

export default Transaction;
