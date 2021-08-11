import React from 'react';
import './SelectFont.css';

//import React, { useState } from "react";

import DisplayData from '../DisplayData/DisplayData';
import fontsData from '../../data/fontsData.json';

const showJsonData =  <DisplayData /> ;

const alefSefardiName = fontsData.sefaradi[0].name;
const alefSefardiValue = fontsData.sefaradi[0].value;

const showData = () => {
    console.log(`${alefSefardiName}=${alefSefardiValue}`);
}

const SelectFont = (props) => {

    return(
        <div>
           <select id="mainSelect" onChange={showData()}>
                <option value="sefaradi">ספרדי</option>
                <option value="betYosef" selected >בית יוסף</option>
                <option value="haari" >האר"י</option>
                <option value="ashkenazi">אשכנזי</option>
                <option value="temani">תימני</option>
           </select> 
        </div>
    );
}

export default SelectFont