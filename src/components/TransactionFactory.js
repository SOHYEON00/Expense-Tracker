import React, {useEffect} from 'react';
import useForm from 'utilities/useForm';
import validate from 'utilities/validate';
import RadioComponent from '../utilities/RadioComponent';
import {TRANSACTIONS} from "fBase";

function TransactionFactory() {
  const {
    values,
    errors,
    isSubmit,
    changeHandler,
    submitHandler,
    categories,
    getCategories
  } = useForm({
    initialValues: {
      formType: TRANSACTIONS,
      type: "지출",
      date: "",
      text: "",
      amount: 0,
      category: "",
    },
    onSubmit: (values) => {},
    validate,
  });


  return (
    <>
      <form onSubmit={submitHandler}>
          <h3>Add New Transaction</h3>

          <fieldset id="type">
            <RadioComponent
              values={values}
              changeHandler={changeHandler}
              categories={categories}
            />
          </fieldset>
        <fieldset id="info">
          <p>
            <label htmlFor="date">Date</label>
            {errors.date && <span>{errors.date}</span>}
            <input
              type="date"
              name="date"
              value={values.date}
              onChange={changeHandler}
              required
            />
          </p>
          <p>
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
          </p>
          <p>
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
          </p>
        </fieldset>

        <input type="submit" value="Add transaction" disabled={isSubmit} />
      </form>
    </>
  );
}

export default TransactionFactory
