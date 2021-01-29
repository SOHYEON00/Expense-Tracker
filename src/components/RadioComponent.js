import React from 'react'

function RadioComponent({values, changeHandler}) {

    let isExpense = true;

    if(values.type === '지출'){
        isExpense = true;
    } else if(values.type === '수입'){
        isExpense = false;
    }
    return (
      <>
        <label htmlFor="typePlus">수입</label>
        <input
          type="radio"
          name="type"
          id="typePlus"
          className="transactionType"
          value="수입"
          checked={!isExpense}
          onChange={changeHandler}
        />
        <label htmlFor="typeMinus">지출</label>
        <input
          type="radio"
          name="type"
          id="typeMinus"
          className="transactionType"
          value="지출"
          checked={isExpense}
          onChange={changeHandler}
        />
      </>
    );
}

export default RadioComponent
