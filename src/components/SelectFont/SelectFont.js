import React, { useState } from 'react';

import './SelectFont.css';

import DisplayData from '../DisplayData/DisplayData';

const SelectFont = () => {

    const [selectValue, setSelectValue] = useState('בית יוסף');

    //{target} -restruct event given object
    const handleFontChange = ({ target }) => {
        setSelectValue(target.value);    
    }

    const myFun = () => {
        return (
            selectValue === 'ספרדי' && <DisplayData/>
        )
    }

    return(
        <div className="styleSelect">
           <select onChange={handleFontChange} >
                <option value="ספרדי">
                    ספרדי
                </option>
                <option value="betYosef" selected >בית יוסף</option>
                <option value="haari" >האר"י</option>
                <option value="אשכנזי">"אשכנזי</option>
                <option value="תימני">"תימני</option>
           </select> 
           {myFun()}
        </div>
    );
}

export default SelectFont;