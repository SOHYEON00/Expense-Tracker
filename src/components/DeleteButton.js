import { TRANSACTIONS, dbService } from 'fBase';
import React from 'react';

function DeleteButton({ transactionId }) {
    const onDeleteClick = async() => {
        const yes = window.confirm("내역을 삭제하시겠습니까?");

        if(yes){
            await dbService.doc(`${TRANSACTIONS}/${transactionId}`).delete();
        }
    }
    return (
        <button className="deleteBtn" onClick={onDeleteClick}>X</button>
    )
}

export default DeleteButton
