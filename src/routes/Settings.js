import CategoriesSection from 'components/CategoriesSection'
import SelectBgcolor from 'components/SelectBgcolor';
import React from 'react'

function Settings({categories, mainColor, btnStyle}) {

    return (
        <>
         <article id="settingSection" className="mainContainer">
             <CategoriesSection categories={categories} btnStyle={btnStyle}/>
             <SelectBgcolor mainColor={mainColor} btnStyle={btnStyle}/>
        </article>   
        </>
    )
}

export default Settings
