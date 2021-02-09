import { dbService, MAINCOLOR } from 'fBase';
import React, {useState} from 'react'

function SelectBgcolor() {
    const componentToHex = (c) => {
        const hex = (+c).toString(16); //이미 c가 string이라서 +붙여 int로 바꿔줌.
        return hex.length === 1 ? "0" + hex : hex;
    };

    const rgbToHex = (r,g,b) => {
        return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
    }
    
    const root = document.querySelector('div#root');

    //  bgColor.match(/\d+/g); => array with only [r, g, b]
    // getComputedStyle(root).getPropertyValue('background-color') => css에 작성되어있지 않아도 작동함.

    const rgbArray = (getComputedStyle(root).getPropertyValue('background-color')).match(/\d+/g);
    const currentBgColor = rgbToHex(rgbArray[0], rgbArray[1], rgbArray[2]); //hex version

    const [mainColor, setBgColor] = useState(currentBgColor);

    const saveColorOnDB = async() => {
        await dbService.doc(`${MAINCOLOR}/mainColor`).update({
            bgColor: `${mainColor}77`,
            buttonColor: mainColor,
            scrollbarColor: mainColor,
        });
    }

    const changeColor = (e) => {
        const {value} = e.target;
        setBgColor(value);
    }
                                                                                                                                                                                                                                                               
    const onSubmitHandler = (e) => {
        e.preventDefault();
        root.style.setProperty('background-color', `${mainColor}77`);

        saveColorOnDB();
    }
    return (
        <div>
            <h3>메인 컬러</h3>
            <form onSubmit={onSubmitHandler}>
                <input type="color" onChange={changeColor} value={mainColor}/>
                <input type="submit" value="Apply" />
            </form>
            
        </div>
    )
}

export default SelectBgcolor
