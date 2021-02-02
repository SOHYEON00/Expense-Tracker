import {useState, useEffect} from 'react';
import {CATEGORIES, dbService, TRANSACTIONS} from 'fBase';

function useForm({ initialValues, onSubmit, validate}) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [categories, setCategories] = useState([]);

    const addTransactionFB = async(obj) => {
        await dbService.collection(TRANSACTIONS).doc(`${obj.id}`).set(obj);
    };

    const addCategoryFB = async(obj) => {
        await dbService.collection(CATEGORIES).add(obj);
    }

    const changeHandler = (event) => {
        const {name, value} = event.target;
        setValues({ ...values, [name]: value});
        setIsSubmit(false);
        // setErrors(validate(values));
    };

    const getCategories = async() => {
      
        await dbService.collection(CATEGORIES).onSnapshot((snapshot) => {
          const categoryArray = snapshot.docs.map((doc) =>({
            id: doc.id,
            ...doc.data(),
          })).filter(e => e.type !== values.type);
          setCategories(categoryArray);
        });
      };
   
    const submitHandler = (event) => {
        event.preventDefault();
        setIsSubmit(true);
        setErrors(validate(values));
        
        if(values.formType === TRANSACTIONS){
            const transactionObj = {
            type: values.type,
            date: values.date,
            id: Date.now(),
            text: values.text,
            amount: values.amount,
            };

            addTransactionFB(transactionObj);
        } 
        
        else if(values.formType === CATEGORIES){
            console.log(values);
            const categoryObj = {
                type: values.type,
                category: values.category
            }
            addCategoryFB(categoryObj);
        }

      setValues(initialValues);
    };

    useEffect(() => {
        if(isSubmit) {
            onSubmit(values);
        } 
        setIsSubmit(false);
    }, [isSubmit, values, onSubmit]);

    return {
        values,
        errors,
        isSubmit,
        changeHandler,
        submitHandler,
        getCategories,
        categories
    
    }
}

export default useForm;