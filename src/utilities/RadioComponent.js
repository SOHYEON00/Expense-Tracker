import React, {useRef} from 'react'

function RadioComponent({values, changeHandler}) {

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
          <label htmlFor="typePlus" className="radioLabels" onClick={slideMoveHandler}>+</label>
          <input
            type="radio"
            name="type"
            id="typePlus"
            className="transactionType"
            value="수입"
            onChange={changeHandler}
          />
          <label htmlFor="typeMinus" className="radioLabels" onClick={slideMoveHandler}>-</label>
          <input
            type="radio"
            name="type"
            id="typeMinus"
            className="transactionType"
            value="지출"
            onChange={changeHandler}
          />
          
        </div>
      </>
    );
}

export default RadioComponent
