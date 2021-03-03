import { dbService } from 'fBase';
import React from 'react';

function DeleteButton({ formType, itemId }) {
    const onDeleteClick = async() => {
        const yes = window.confirm("내역을 삭제하시겠습니까?");
        //try-catch 문으로 바꾸기
        if(yes){
            //이미 formType이 fBase에서 가져온 것이므로 if-else if문 삭제함 -> 잘 작동함.
            await dbService.doc(`${formType}/${itemId}`).delete();
        }
    }
    return (
        <button className="eventButton" onClick={onDeleteClick}>X</button>
    )
}

export default DeleteButton
