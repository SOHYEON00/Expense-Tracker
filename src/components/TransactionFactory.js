import React from 'react';
import useForm from 'components/useForm';
import validate from 'components/validate';
import RadioComponent from './RadioComponent';
import {TRANSACTIONS} from "fBase";

function TransactionFactory() {

  const { values, errors, isSubmit, changeHandler, submitHandler} = useForm({
    initialValues: {formType: TRANSACTIONS, type: "지출", date: "", text: "", amount: 0},
    onSubmit: (values) => {},
    validate,
    });

  

  return (
    <>
    <h3>Add New Transaction</h3>
    <form onSubmit={submitHandler}>
      <fieldset id="type">
        <legend>Transaction type</legend>
        <RadioComponent values={values} changeHandler={changeHandler} />
        
      </fieldset>

      <fieldset id="info">
        <legend>Transaction Info</legend>

        <label htmlFor="date">Date</label>
        {errors.date && <span>{errors.date}</span>}
        <input type="date" name="date" value={values.date} onChange={changeHandler} required/>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          value={values.text}
          onChange={changeHandler}
          name="text"
          id="text"
          placeholder="Enter text"
          required
        />
        <label htmlFor="amount">Amount</label>
        {errors.amount && <span>{errors.amount}</span>}
        <input
          type="number"
          id="amount"
          name="amount"
          value={values.amount}
          onChange={changeHandler}
          required
        />
      </fieldset>
      
      <input type="submit" value="Add transaction" disabled={isSubmit}/>
    </form>
    </>
  );
}

export default TransactionFactory
