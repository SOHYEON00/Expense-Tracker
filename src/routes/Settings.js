import CategoriesSection from 'components/CategoriesSection'
import SelectBgcolor from 'components/SelectBgcolor';
import CategoryFactory from "components/CategoryFactory";
import React from 'react'
import { changeBtnColor } from 'utilities/changeBtnColor';

function Settings({categories, mainColor}) {
    const {SubmitBtn} = changeBtnColor({mainColor});

    return (
        <>
         <article id="settingSection" className="mainContainer">
            <CategoryFactory SubmitBtn={SubmitBtn}/>
             <CategoriesSection categories={categories} />
             <SelectBgcolor mainColor={mainColor} SubmitBtn={SubmitBtn}/>
        </article>   
        </>
    )
}

export default Settings
