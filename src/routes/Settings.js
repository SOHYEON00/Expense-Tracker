import CategoriesSection from 'components/CategoriesSection'
import SelectBgcolor from 'components/SelectBgcolor';
import CategoryFactory from "components/CategoryFactory";
import React from 'react'

function Settings({categories, SubmitBtn}) {

    return (
        <>
         <article id="settingSection" className="mainContainer">
            <CategoryFactory SubmitBtn={SubmitBtn}/>
             <CategoriesSection categories={categories} />
             <SelectBgcolor SubmitBtn={SubmitBtn}/>
        </article>   
        </>
    )
}

export default Settings
