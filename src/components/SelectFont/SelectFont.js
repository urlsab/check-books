import React from 'react';
import './SelectFont.css';

import DisplayData from '../DisplayData/DisplayData';

import fontsData from '../../data/fontsData.json';

const alefSefardiName = fontsData.sefaradi[0].name;
const alefSefardiValue = fontsData.sefaradi[0].value;

const showData = () => {
    console.log(`${alefSefardiName}=${alefSefardiValue}`);
}

// console.log(`${alefSefardiName}=${alefSefardiValue}`);

// const showData = <DisplayData /> ;


const SelectFont = (props) => {
    return(
        <div>
           <select>
                <option onClick={showData()}>ספרדי</option>
                <option>בית יוסף</option>
                <option>האר"י</option>
                <option>אשכנזי</option>
                <option>תימני</option>
           </select> 
        </div>
    );
}

export default SelectFont