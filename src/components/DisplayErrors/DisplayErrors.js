import React from 'react';
import './DisplayErrors.css';

import fontsData from '../../data/fontsData.json';

const alefSefardiID = fontsData.sefaradi[0].info[0].id;
const alefSefardiState = fontsData.sefaradi[0].info[0].mistakeId;

const alefSefardiID1 = fontsData.sefaradi[0].info[1].id;
const alefSefardiState1 = fontsData.sefaradi[0].info[1].mistakeId;

const alefSefardiID2 = fontsData.sefaradi[0].info[2].id;
const alefSefardiState2 = fontsData.sefaradi[0].info[2].mistakeId;

const DisplayErrors = props => {
    return(
        <div className="showErros">
            <p>{alefSefardiID} = {alefSefardiState} {props.choosed}</p>
            <p>{alefSefardiID1} = {alefSefardiState1} {props.choosed}</p>
            <p>{alefSefardiID2} = {alefSefardiState2} {props.choosed}</p>
        </div>
  );
}

export default DisplayErrors;