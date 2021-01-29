import React from 'react';
import CategoryFactory from "components/CategoryFactory";
import Category from './Category';

function CategoriesSection({ categories }) {

  
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
            {categories &&
              categories.map((category) => {
                return <Category key={category.id}  category={category}/>;
              })}
          </tbody>
        </table>
      </div>
    );
}

export default CategoriesSection
