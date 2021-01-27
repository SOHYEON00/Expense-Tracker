import React from 'react';

function Transaction({ transactionObj }) {
    const type = transactionObj.type;
    console.log(transactionObj);
    
    return (
        <div>
            {transactionObj.date}
            {transactionObj.text}
            {transactionObj.amount}
        </div>
    )
}

export default Transaction
