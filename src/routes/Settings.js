import CategoriesSection from 'components/CategoriesSection'
import React from 'react'

function Settings({categories}) {
    return (
        <>
         <article id="settingSection">
             <CategoriesSection categories={categories}/>
        </article>   
        </>
    )
}

export default Settings
