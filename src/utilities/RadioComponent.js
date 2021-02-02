import React from 'react'

function RadioComponent({values, changeHandler, categories}) {

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
        <select name="category" onChange={changeHandler}>
          <option>카테고리를 선택해주세요.</option>
          {categories &&
            categories.map((e) => {
              return <option key={e.id} value={e.category}>{e.category}</option>;
            })}
        </select>
      </>
    );
}

export default RadioComponent
