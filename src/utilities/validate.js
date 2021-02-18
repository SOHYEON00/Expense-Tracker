export default function validate({ date, amount}){
    const errors = {};

    if(!date){
        errors.date = "날짜를 입력해주세요.";
    } else {
        errors.date = null;
    }
    
    if(!/^[0-9]/.test(amount)){
        errors.amount = "금액에는 숫자만 입력해주세요.";
    } else{
        errors.amount = null;
    }

    return errors;
}