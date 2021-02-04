import { TRANSACTIONS, dbService, CATEGORIES } from 'fBase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import React, {useState} from 'react';

function UpdateButton({ formType, itemId, text }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(text);
    let isTransaction = false;
    let isCategory = false;

    const onToggleHandler = () => {
        setIsEditing(prev => !prev);
        if (formType === TRANSACTIONS) {
            isTransaction = true;
        }
        else if(formType === CATEGORIES) {
            isCategory = true;
        }
    };

    const onTextHandler = (e) => {
        setNewText(e.target.value);
    }

    const UpdateHandler = async() => {
      window.alert("내용이 업데이트됩니다.");

    //   if (formType === TRANSACTIONS) {
    //     await dbService.doc(`${formType}/${itemId}`).update({
    //         category: newText,
    //     });
    //   } else if (formType === CATEGORIES) {
    //     await dbService.doc(`${formType}/${itemId}`).update({
    //         category: newText,
    //     });
    //   }

      setIsEditing(false);
    }
    return (
      <>
        <button className="deleteBtn" onClick={onToggleHandler}>
        <FontAwesomeIcon icon={faPencilAlt} />
        </button>

        {isEditing &&   (
          <form onSubmit={UpdateHandler}>
            <input
              type="text"
              value={newText}
              onChange={onTextHandler}
            />
            <input type="submit" />
          </form>
        )}
      </>
    );
}

export default UpdateButton
