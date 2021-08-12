import React, { useState } from 'react';

import './DisplayData.css';

import fontsData from '../../data/fontsData.json';
import DisplayErrors from '../DisplayErrors/DisplayErrors';

const alefSefardiName = fontsData.sefaradi[0].name;
const alefSefardiValue = fontsData.sefaradi[0].value;

const alefSefardiName1 = fontsData.sefaradi[1].name;
const alefSefardiValue1 = fontsData.sefaradi[1].value;

const alefSefardiName2 = fontsData.sefaradi[2].name;
const alefSefardiValue2 = fontsData.sefaradi[2].value;

const alefSefardiName3 = fontsData.sefaradi[3].name;
const alefSefardiValue3 = fontsData.sefaradi[3].value;

// console.log(`${alefSefardiName}=${alefSefardiValue}`);

const DisplayData = () => {

    const [cliked, setCliked] = useState(false);

    return(
        <div className="showLetters">
            <p className="showData"  onClick={() => {setCliked(true); } } >{alefSefardiName} = {alefSefardiValue} </p>
            <p className="showData" >{alefSefardiName1} = {alefSefardiValue1} </p>
            <p className="showData" >{alefSefardiName2} = {alefSefardiValue2} </p>
            <p className="showData" >{alefSefardiName3} = {alefSefardiValue3} </p>

            {cliked ? <DisplayErrors /> : null }
            {/* <ul>
                {SefardiNames.map(i => (<li>{i}</li>))}
            </ul>  */}
        </div>
  );
}

export default DisplayData;