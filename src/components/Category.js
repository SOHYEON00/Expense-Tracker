import React, {useState} from 'react';
import { CATEGORIES, dbService } from 'fBase';
import DeleteButton from './DeleteButton';
// import UpdateHandler from 'components/UpdateHandler';

function Category({ category }) {
    const [newCategoryText, setNewCategoryText] = useState(category.category);
    const [isEditing, setIsEditing] = useState(false);

    const onToggleHandler = () => {
        setIsEditing(prev => !prev);
    };

    const onTextHandler = (e) => {
        setNewCategoryText(e.target.value);
    }
    const UpdateHandler = async(e) => {
        e.preventDefault();
        await dbService.doc(`${CATEGORIES}/${category.id}`).update({
            category: newCategoryText,
        });
        setIsEditing(false);
    }
    return (
        <tr >
        <td>
            <DeleteButton formType={CATEGORIES} itemId={category.id} />
        </td>
        <td>{category.type}</td>
        <td>{category.category}</td>
         <td>
            <button onClick={onToggleHandler}>Update</button>
            {isEditing && 
                <form onSubmit={UpdateHandler}>
                    <input type="text" value={newCategoryText} onChange={onTextHandler}/>
                    <input type="submit"/>
                </form>
            }
        </td>
      </tr>
    )
}

export default Category
