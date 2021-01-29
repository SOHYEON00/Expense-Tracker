import Categories from 'components/Categories'
import React from 'react'

function Settings({categories}) {
    return (
        <>
         <article>
             <Categories categories={categories}/>
        </article>   
        </>
    )
}

export default Settings
