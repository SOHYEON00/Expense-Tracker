import { dbService, MAINCOLOR } from 'fBase';
import React, {useState} from 'react'

function SelectBgcolor({ SubmitBtn }) {
    const currentMainColor = SubmitBtn.componentStyle.rules[1];
    const [newMainColor, setNewMainColor] = useState(`${currentMainColor}`);

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
          <input type="color" onChange={changeColor} value={newMainColor} />
          <SubmitBtn type="submit" className="button" value="Apply"></SubmitBtn>
        </form>
      </div>
    );
}

export default SelectBgcolor
