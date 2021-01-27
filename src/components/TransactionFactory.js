import React from 'react';
import useForm from 'components/useForm';

function TransactionFactory() {

  const { values, isSubmit, changeHandler, submitHandler} = useForm({
    initialValues: {type: "", date: "", text: "", amount: 0},
    onSubmit: (values) => {}
    });

  return (
    <form onSubmit={submitHandler}>
      <fieldset id="type">
        <legend>Transaction type</legend>
        <label htmlFor="typePlus">수입</label>
        <input
          type="radio"
          name="type"
          id="typePlus"
          className="transactionType"
          value="수입"
          onChange={changeHandler}
        />
        <label htmlFor="typeMinus">지출</label>
        <input
          type="radio"
          name="type"
          id="typeMinus"
          className="transactionType"
          value="지출"
          onChange={changeHandler}
        />
        
      </fieldset>

      <fieldset id="info">
        <legend>Transaction Info</legend>

        <label htmlFor="date">Date</label>
        <input type="date" name="date" value={values.date} onChange={changeHandler}/>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          value={values.text}
          onChange={changeHandler}
          name="text"
          id="text"
          placeholder="Enter text"
        />
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={values.amount}
          onChange={changeHandler}
        />
      </fieldset>
      <input type="submit" value="Add transaction" disabled={isSubmit}/>
    </form>
  );
}

export default TransactionFactory
