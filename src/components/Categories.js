import React from 'react';
import CategoryFactory from "components/CategoryFactory";

function Categories({ categories }) {
    const categoryList = categories.map((category) => {
        return (
          <tr key={category.id}>
            <td>{category.type}</td>
            <td>{category.category}</td>
          </tr>
        );
    });
    console.log(categories);   
  
    return (
        <div>
            <CategoryFactory />
            <h3>카테고리 설정</h3>
            <table>
                <thead>
                    <tr>
                    <th>TYPE</th>
                    <th>CATEGORY</th>
                    </tr>
                </thead>
                <tbody>
                    {categoryList}
                </tbody>
            </table>
        </div>
    )
}

export default Categories
