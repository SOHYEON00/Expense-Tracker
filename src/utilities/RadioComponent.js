import React, {useRef} from 'react'

function RadioComponent({values, changeHandler, categories}) {

    const slideRef = useRef();

    const slideMoveHandler = () => {
      const slideDiv = slideRef.current;
      if(!slideDiv.classList.contains('toRight')){
        slideDiv.classList.remove('toLeft');
        slideDiv.classList.add('toRight');
      } else {
        slideDiv.classList.remove('toRight');
        slideDiv.classList.add('toLeft');
      }

      
    }

    

    return (
      <>
        
        <div className="radios" >
          <div className="checked" ref={slideRef}></div>
          <label htmlFor="typePlus" className="labels" onClick={slideMoveHandler}>+</label>
          <input
            type="radio"
            name="type"
            id="typePlus"
            className="transactionType"
            value="수입"
            onChange={changeHandler}
          />
          <label htmlFor="typeMinus" className="labels" onClick={slideMoveHandler}>-</label>
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
