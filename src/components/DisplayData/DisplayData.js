import React from 'react';
import './DisplayData.css';

import fontsData from '../../data/fontsData.json';

const alefSefardiName = fontsData.sefaradi[0].name;
const alefSefardiValue = fontsData.sefaradi[0].value;

// console.log(`${alefSefardiName}=${alefSefardiValue}`);

const DisplayData = props => {
    return(
        <div>
            <p className="showData" >{alefSefardiName} = {alefSefardiValue} {props.cliked}</p>
            {/* <ul>
                {SefardiNames.map(i => (<li>{i}</li>))}
            </ul>  */}
        </div>
  );
}

export default DisplayData;