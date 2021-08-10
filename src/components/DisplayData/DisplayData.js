import React from 'react';
import './DisplayData.css';

import fontsData from '../../data/fontsData.json';
import lettersData from '../../data/lettersData.json';

const sefaradiFont = fontsData.sefaradi;
const betYosefFont = fontsData.betYosef;
const haariFont = fontsData.haari;

const DisplayData = props => {
    return(
        <div className="showData">
            <ul>
                {sefaradiFont.map(i => (<li>{i}</li>))}
            </ul> 
        </div>
  );
}

export default DisplayData;