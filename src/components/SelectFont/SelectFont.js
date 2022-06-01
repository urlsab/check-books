import React, { useState } from 'react';
import './SelectFont.css';
import DisplayData from '../DisplayData/DisplayData';

const haariString = 'האר"י';
console.log(haariString);

const SelectFont = () => {

    const [selectValue, setSelectValue] = useState('בית יוסף');

    //{target} -restruct event given object
    const handleFontChange = ({ target }) => {
        setSelectValue(target.value);    
    }

    const selectHandler = () => {
        return (
            selectValue === 'ספרדי' && <DisplayData/>
        )
    }

    return (
        <div className="styleSelect">
           <select onChange={handleFontChange} >
                <option value="ספרדי">
                    ספרדי
                </option>
                <option value="אשכנזי" selected>
                    אשכנזי
                </option>
                <option value="תימני">
                    תימני
                </option>
                <option value={haariString}>
                    האר"י
                </option>
                <option value="ספרדי">
                    בית יוסף
                </option>
           </select> 
           {selectHandler()}
        </div>
    );
}

export default SelectFont;