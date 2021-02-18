import React from 'react';
import Category from 'components/Category';

function CategoriesSection({ categories}) {

  
    return (
      <>
        <div className="listTable">
        <h3>Category List</h3>
        <table>
          <thead>
            <tr>
              <th>삭제</th>
              <th>TYPE</th>
              <th>CONTENTS</th>
              <th>수정</th>
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
      </>
    );
}

export default CategoriesSection
