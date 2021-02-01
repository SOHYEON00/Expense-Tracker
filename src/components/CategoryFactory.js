import React from 'react'
import RadioComponent from 'utilities/RadioComponent';
import useForm from 'utilities/useForm';
import validate from 'utilities/validate';
import {CATEGORIES} from 'fBase';

function CategoryFactory() {
    const { values, errors, isSubmit, changeHandler, submitHandler} = useForm({
        initialValues: {formType: CATEGORIES, type: "지출", category: ""},
        onSubmit: (values) => {},
        validate
        });
    return (
      <>
        <button>+</button>

        <form onSubmit={submitHandler}>
      
            <RadioComponent values={values} changeHandler={changeHandler} />
         
            <label htmlFor="category">카테고리 내용</label>
            <input type="text" name="category" required value={values.category} onChange={changeHandler} placeholder="카테고리 내용을 입력해주세요."/>
          
          <input type="submit" name="submit" value="+"/>
        </form>
      </>
    );
}

export default CategoryFactory
