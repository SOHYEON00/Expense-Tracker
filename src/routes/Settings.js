import CategoriesSection from 'components/CategoriesSection'
import SelectBgcolor from 'components/SelectBgcolor';
import React from 'react'

function Settings({categories}) {
    return (
        <>
         <article id="settingSection">
             <CategoriesSection categories={categories}/>
             <SelectBgcolor />
        </article>   
        </>
    )
}

export default Settings
