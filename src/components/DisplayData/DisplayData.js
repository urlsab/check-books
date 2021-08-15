import React, { useState } from 'react';

import './DisplayData.css';

import fontsData from '../../data/fontsData.json';
import DisplayErrors from '../DisplayErrors/DisplayErrors';

const SefardiLetters = fontsData.sefaradi;

// console.log(`${alefSefardiName}=${alefSefardiValue}`);

const DisplayData = () => {

    const [cliked, setCliked] = useState(false);

    return(
        <div className="showLetters">
            <ul>
                {SefardiLetters.map(i => 
                    (<p className="showData" 
                        onClick={ () => {setCliked(true); } }
                    >
                    {i.name} = {i.value}</p>)
                )}
            </ul>
            {cliked ? <DisplayErrors /> : null } 
        </div>
  );
}

export default DisplayData;