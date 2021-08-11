import React from 'react';
import './DisplayImg.css';

import fontsData from '../../data/fontsData.json';

const alefSefardiImg = fontsData.sefaradi[0].info[0].imgUrl;

const DisplayImg = () => {
    return(
        <div className="showImg">
            <img src={alefSefardiImg} height="80" width="90"></img>
        </div>
  );
}

export default DisplayImg;