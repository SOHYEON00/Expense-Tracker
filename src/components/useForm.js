import {useState, useEffect} from 'react';
import {dbService, TRANSACTIONS} from 'fBase';

function useForm({ initialValues, onSubmit}) {
    const [values, setValues] = useState(initialValues);
    // const [errors, setErrors] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    const changeHandler = (event) => {
        const {name, value} = event.target;
        setIsSubmit(false);
        setValues({ ...values, [name]: value});
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setIsSubmit(true);
        
      const transactionObj = {
          type: values.type,
          date: values.date,
          id: Date.now(),
          text: values.text,
          amount: values.amount,
      };
      addObjFirebase(transactionObj);
    };

    const addObjFirebase = async(obj) => {
        await dbService.collection(TRANSACTIONS).add(obj);
    }

    useEffect(() => {
        if(isSubmit) {
            onSubmit(values);
        } 
        setIsSubmit(false);
    }, [isSubmit, values, onSubmit]);

    return {
        values,
        isSubmit,
        changeHandler,
        submitHandler
    }
}

export default useForm;