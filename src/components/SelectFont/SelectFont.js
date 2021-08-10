import React from 'react';
import './SelectFont.css';

import DisplayData from '../DisplayData/DisplayData';

import fontsData from '../../data/fontsData.json';
import lettersData from '../../data/lettersData.json';

const sefaradiFont = fontsData.sefaradi;
const betYosefFont = fontsData.betYosef;
const haariFont = fontsData.haari;

const SelectFont = (props) => {
    return(
        <div>
           <select onChange={sefaradiFont}>
                <option>ספרדי</option>
                <option>בית יוסף</option>
                <option>האר"י</option>
                <option>אשכנזי</option>
                <option>תימני</option>
           </select> 
        </div>
    );
}

export default SelectFont