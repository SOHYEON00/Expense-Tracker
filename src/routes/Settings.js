import CategoriesSection from 'components/CategoriesSection'
import React from 'react'

function Settings({categories}) {
    return (
        <>
         <article>
             <CategoriesSection categories={categories}/>
        </article>   
        </>
    )
}

export default Settings
