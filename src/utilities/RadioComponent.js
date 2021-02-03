import React from 'react'

function RadioComponent({values, changeHandler, categories}) {

    let chkIncome = "";
    let chkExpense = "checked";

    if(values.type === '지출'){
      chkIncome = '';
      chkExpense = 'checked';
    } else if(values.type === '수입'){
      chkIncome = 'checked';
      chkExpense = '';
    }

    return (
      <>
        <div className="radios">
          <label htmlFor="typePlus" className={chkIncome}>수입</label>
          <input
            type="radio"
            name="type"
            id="typePlus"
            className="transactionType"
            value="수입"
            onChange={changeHandler}
          />
          <label htmlFor="typeMinus" className={chkExpense}>지출</label>
          <input
            type="radio"
            name="type"
            id="typeMinus"
            className="transactionType"
            value="지출"
            onChange={changeHandler}
          />
        </div>
        <select name="category" onChange={changeHandler}>
          <option>카테고리를 선택해주세요.</option>
          {categories &&
            categories.filter(e => e.type === values.type).map((e) => {
              return (
                <option key={e.id} value={e.category}>
                  {e.category}
                </option>
              );
            })}
        </select>
      </>
    );
}

export default RadioComponent
