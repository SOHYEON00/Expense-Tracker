import React, {useState} from 'react';
import { CATEGORIES, dbService } from 'fBase';
import DeleteButton from 'utilities/DeleteButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import Modal from 'utilities/Modal';
// import UpdateHandler from 'components/UpdateHandler';

function Category({ category }) {
    const [newCategoryText, setNewCategoryText] = useState(category.category);
    const [openModal, setOpenModal] = useState(false);

    const onToggleHandler = () => {
        setOpenModal(prev => !prev);
    };

    const onTextHandler = (e) => {
        setNewCategoryText(e.target.value);
    }

    const UpdateHandler = async(e) => {
        e.preventDefault();
        setOpenModal(false);
        await dbService.doc(`${CATEGORIES}/${category.id}`).update({
            category: newCategoryText,
        });
        
    }
    return (
      <tr>
        <td>
          <DeleteButton formType={CATEGORIES} itemId={category.id} />
        </td>
        <td>{category.type}</td>
        <td>{category.category}</td>
        <td>
          <button onClick={onToggleHandler} className="deleteBtn">
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
        </td>
        {openModal && (
            <Modal
              header="카테고리 수정"
              onToggleHandler={onToggleHandler}
              contents={
                  <>
                  <p>{`${category.type} - `} <span>{category.category}</span></p>
                <form onSubmit={UpdateHandler}>
                  <input
                    type="text"
                    value={newCategoryText}
                    onChange={onTextHandler}
                    className="input"
                  />
                  <button className="submitButtonIcon" ><FontAwesomeIcon icon={faArrowCircleRight} /></button>
                </form>
                </>
              }
            />
          )}
      </tr>
    );
}

export default Category
