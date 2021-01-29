import React from 'react';
import { CATEGORIES } from 'fBase';
import DeleteButton from './DeleteButton';

function Category({ category }) {
    return (
        <tr >
        <td>
            <DeleteButton formType={CATEGORIES} itemId={category.id} />
        </td>
        <td>{category.type}</td>
        <td>{category.category}</td>
        <td>
            <button>Update</button>
        </td>
      </tr>
    )
}

export default Category
