import React from 'react';
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
          <RadioComponent
              values={values}
              changeHandler={changeHandler}
            />
          <fieldset className="formFieldset">
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

          <p>
            <label htmlFor="date">Date</label>
            {errors.date && <span>{errors.date}</span>}
            <input
              type="date"
              name="date"
              value={values.date}
              onChange={changeHandler}
              required
              className="input"
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
              className="input"
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
              className="input"
            />
          </p>
        </fieldset>

        <input type="submit" value="Add transaction" disabled={isSubmit} />
      </form>
    </>
  );
}

export default TransactionFactory
