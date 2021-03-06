import React, { useState } from "react";
import DeleteButton from "utilities/DeleteButton";
import Modal from "utilities/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { TRANSACTIONS, dbService } from "fBase";
import numToString from "utilities/printComma";

function Transaction({ transactionObj, isNewDate }) {
  const [newText, setNewText] = useState(transactionObj.text);
  const [openModal, setOpenModal] = useState(false);
  const type = transactionObj.type;

  // open <-> close
  const onToggleHandler = () => {
    setOpenModal((prev) => !prev);
  };

  const UpdateHandler = async (e) => {
    e.preventDefault();
    onToggleHandler();

    await dbService.doc(`${TRANSACTIONS}/${transactionObj.id}`).update({
      text: newText,
    }); 
  };

  const onTextHandler = (e) => {
    setNewText(e.target.value);
  };

  let colorByType = ""; // 수입, 지출별 컬러 출력을 위한 className 변수

  if (type === "수입") {
    colorByType = "moneyPlus";
  } else if (type === "지출") {
    colorByType = "moneyMinus";
  }

  return (
    <>
      {isNewDate ? <p className="date">{transactionObj.date}</p> : ""}
      <div className={`${colorByType} transactionContainer`} >
        <div className="buttonContainer">
          <DeleteButton formType={TRANSACTIONS} itemId={transactionObj.id} />

          <button onClick={onToggleHandler} className="eventButton">
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
        </div>

        <div className="transactionContents">
          <span className="text">
            {transactionObj.text}
            <span className="category">{transactionObj.category}</span>
          </span>
          <span className="amount">{numToString(transactionObj.amount)}원</span>
        </div>
      </div>
      {openModal && (
        <Modal
          header="거래 내역 수정"
          onToggleHandler={onToggleHandler}
          contents={
            <>
              <p>
                {`${transactionObj.date} / ${transactionObj.type} / `}
                <span>{transactionObj.text}</span>
                {` / ${transactionObj.amount}`}
              </p>
              <form onSubmit={UpdateHandler}>
                <input
                  type="text"
                  value={newText}
                  onChange={onTextHandler}
                  className="input"
                />
                <button className="modalSubmitButton">
                  <FontAwesomeIcon icon={faArrowCircleRight} />
                </button>
              </form>
            </>
          }
        />
      )}
    </>
  );
}

export default Transaction;
