import React from 'react';
import './DisplayImg.css';

import fontsData from '../../data/fontsData.json';

const alefSefardiName = fontsData.sefaradi[0].name;
const alefSefardiImg = fontsData.sefaradi[0].info[0].imgUrl;
const alefSefardiLocalId = fontsData.sefaradi[0].info[0].localId;

const DisplayImg = () => {
    return(
        <div className="showLocalId">
            <p>{alefSefardiLocalId} - {alefSefardiName} </p>
            <img className="showImg" src={alefSefardiImg} height="80" width="90"></img>
        </div>
  );
}

export default DisplayImg;