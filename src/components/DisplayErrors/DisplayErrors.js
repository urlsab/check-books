import React, { useState } from 'react';

import './DisplayErrors.css';

import fontsData from '../../data/fontsData.json';

import DisplayImg from '../DisplayImg/DisplayImg';

const sefaradiErros = fontsData.sefaradi;

const DisplayErrors = () => {

    const [choosed, setChoosed] = useState(false);

    return(
        <div className="showErros">
            <ul>
                {sefaradiErros.map(i => (<p className="showItem" onClick={() => {setChoosed(true); } }>{i.id} = {i.MistakeId}</p>))}
            </ul>
            {choosed ? <DisplayImg /> : null }
        </div>
  );
}

export default DisplayErrors;