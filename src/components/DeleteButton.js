import { TRANSACTIONS, dbService, CATEGORIES } from 'fBase';
import React from 'react';

function DeleteButton({ formType, itemId }) {
    const onDeleteClick = async() => {
        const yes = window.confirm("내역을 삭제하시겠습니까?");

        if(yes){

            if(formType === TRANSACTIONS){
                await dbService.doc(`${TRANSACTIONS}/${itemId}`).delete();
            }
            else if(formType === CATEGORIES){
                await dbService.doc(`${CATEGORIES}/${itemId}`).delete();
            }
            
        }
    }
    return (
        <button className="deleteBtn" onClick={onDeleteClick}>X</button>
    )
}

export default DeleteButton
