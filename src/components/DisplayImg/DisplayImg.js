import React from 'react';
import './DisplayImg.css';

import fontsData from '../../data/fontsData.json';

const sefardiLetters = fontsData.sefaradi;

const renderLetterImg = () => {
    return (
        sefardiLetters.map(i => 
            (i.info.map(j => 
                    (<img key={j} className="showImg" src={j.imgUrl} height="80" width="90"></img>)
                )
            )
        )
    );
}

const renderLocalId = () => {
    return (
        sefardiLetters.map(i => 
                (i.info.map(j => 
                    (<p key={j} className="showItem"> {j.localId} = {i.name} </p>) 
                )
            )
        )
    );
}


const DisplayImg = () => {
    return(
        <div className="showLocalId">
            {/* <ul> {renderLocalId()} </ul> */}
            {/* <ul> {renderLetterImg()} </ul> */}
            <p>img</p>
        </div>
  );
}

export default DisplayImg;