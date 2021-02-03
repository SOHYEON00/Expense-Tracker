import {useState, useEffect} from 'react';
import {CATEGORIES, dbService, TRANSACTIONS} from 'fBase';

function useForm({ initialValues, onSubmit, validate}) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [categories, setCategories] = useState([]);

    const getCategories = async() => {
        await dbService.collection(CATEGORIES).onSnapshot((snapshot) => {
          const categoryArray = snapshot.docs.map((doc) =>({
            id: doc.id,
            ...doc.data(),
          }))
          setCategories(categoryArray);
        });
      };

    if(categories.length === 0 ){ //첫 렌더링 때, 모든 카테고리 목록을 가져오기 위한 조건문
        getCategories();
    }
    
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

    //get categories from db by category type
    console.log(values)

    const submitHandler = (event) => {
        event.preventDefault()
        setIsSubmit(true);
        setErrors(validate(values));
        
        if(values.formType === TRANSACTIONS){
            const transactionObj = {
            type: values.type,
            date: values.date,
            id: Date.now(),
            text: values.text,
            amount: +values.amount, //type이 number로 db에 저장
            category: values.category
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
        categories,
        getCategories
    
    }
}

export default useForm;