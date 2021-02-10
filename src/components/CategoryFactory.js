import React from 'react'
import RadioComponent from 'utilities/RadioComponent';
import useForm from 'utilities/useForm';
import validate from 'utilities/validate';
import {CATEGORIES} from 'fBase';

function CategoryFactory({btnStyle}) {
    const { values, changeHandler, submitHandler} = useForm({
        initialValues: {formType: CATEGORIES, type: "지출", category: ""},
        onSubmit: (values) => {},
        validate
        });
    return (
     
        <form onSubmit={submitHandler} className="categoryForm">
            <h3>New Category</h3>
            <RadioComponent values={values} changeHandler={changeHandler} />
            <p>
            <label htmlFor="category">Contents</label>
            <input type="text" className="input" name="category" required value={values.category} onChange={changeHandler} placeholder="Enter contents..."/>
          
          <input type="submit" className="button" name="submit" value="+" style={btnStyle}/></p>
        </form>
     
    );
}

export default CategoryFactory
