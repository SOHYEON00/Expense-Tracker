import React, {useState} from 'react'

function SelectBgcolor() {
    const componentToHex = (c) => {
        const hex = (+c).toString(16); //이미 c가 string이라서 +붙여 int로 바꿔줌.
        return hex.length == 1 ? "0" + hex : hex;
    };

    const rgbToHex = (r,g,b) => {
        return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
    }
    
    const root = document.querySelector('div#root');

     // bgColor.match(/\d+/g); => array with only [r, g, b]
    const rgbArray = (root.style.getPropertyValue('background-color')).match(/\d+/g);
    const currentBgColor = rgbToHex(rgbArray[0], rgbArray[1], rgbArray[2]); //hex version

    const [bgColor, setBgColor] = useState(currentBgColor);


    const changeColor = (e) => {
        const {value} = e.target;
        setBgColor(value);
    }
                                                                                                                                                                                                                                                                  
    const onSubmitHandler = (e) => {
        e.preventDefault();
        root.style.setProperty('background-color', bgColor);
    }
    return (
        <div>
            <h3>메인 컬러</h3>
            <form onSubmit={onSubmitHandler}>
                <input type="color" onChange={changeColor} value={bgColor}/>
                <input type="submit" value="Apply" />
            </form>
            
        </div>
    )
}

export default SelectBgcolor
