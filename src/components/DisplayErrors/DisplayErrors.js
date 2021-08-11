import React from 'react';
import './DisplayErrors.css';

import fontsData from '../../data/fontsData.json';

const alefSefardiID = fontsData.sefaradi[0].info[0].id;
const alefSefardiState = fontsData.sefaradi[0].info[0].mistakeId;

const DisplayErrors = props => {
    return(
        <div className="showErros">
            <p>{alefSefardiID} = {alefSefardiState} {props.choosed}</p>
        </div>
  );
}

export default DisplayErrors;