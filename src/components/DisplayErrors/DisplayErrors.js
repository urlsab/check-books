import React, { useState } from 'react';

import './DisplayErrors.css';

import fontsData from '../../data/fontsData.json';

import DisplayImg from '../DisplayImg/DisplayImg';

const alefSefardiID = fontsData.sefaradi[0].info[0].id;
const alefSefardiState = fontsData.sefaradi[0].info[0].mistakeId;

const alefSefardiID1 = fontsData.sefaradi[0].info[1].id;
const alefSefardiState1 = fontsData.sefaradi[0].info[1].mistakeId;

const alefSefardiID2 = fontsData.sefaradi[0].info[2].id;
const alefSefardiState2 = fontsData.sefaradi[0].info[2].mistakeId;

const DisplayErrors = props => {

    const [choosed, setChoosed] = useState(false);

    return(
        <div className="showErros">
            <p className="showItem" onClick={() => {setChoosed(true); } } >{alefSefardiID} = {alefSefardiState} {props.clikedMistakeId}</p>
            <p className="showItem">{alefSefardiID1} = {alefSefardiState1} </p>
            <p className="showItem">{alefSefardiID2} = {alefSefardiState2} </p>
            {choosed ? <DisplayImg /> : null }

        </div>
  );
}

export default DisplayErrors;