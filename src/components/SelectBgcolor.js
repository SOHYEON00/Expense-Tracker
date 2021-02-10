import { dbService, MAINCOLOR } from 'fBase';
import React, {useState} from 'react'

function SelectBgcolor({ mainColor, btnStyle }) {
    const [newMainColor, setNewMainColor] = useState(mainColor);
    const saveColorOnDB = async() => {
        await dbService.doc(`${MAINCOLOR}/mainColor`).update({
            mainColor: newMainColor,
            bgColor: `${newMainColor}77`,
            buttonColor: newMainColor,
            scrollbarColor: newMainColor,
        });
    }

    const changeColor = (e) => {
        const {value} = e.target;
        setNewMainColor(value);
    }
                                                                                                                                                                                                                                                               
    const onSubmitHandler = (e) => {
        e.preventDefault();
        saveColorOnDB();
    }
    return (
        <div id="selectColorContainer">
            <h4>메인 컬러</h4>
            <form onSubmit={onSubmitHandler} className="selectColorForm">
                <input type="color" onChange={changeColor} value={newMainColor}/>
                <input type="submit" className="button" value="Apply" style={btnStyle} />
            </form>
            
        </div>
    )
}

export default SelectBgcolor
