import CategoriesSection from 'components/CategoriesSection'
import SelectBgcolor from 'components/SelectBgcolor';
import React from 'react'

function Settings({categories, mainColor}) {

    return (
        <>
         <article id="settingSection" className="mainContainer">
             <CategoriesSection categories={categories}/>
             <SelectBgcolor mainColor={mainColor}/>
        </article>   
        </>
    )
}

export default Settings
