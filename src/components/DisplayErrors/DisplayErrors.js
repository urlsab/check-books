import React, { useState } from 'react';
import './DisplayErrors.css';
import fontsData from '../../data/fontsData.json';
import DisplayImg from '../DisplayImg/DisplayImg';
import DisplayData from '../DisplayData/DisplayData';

const sefardiLetters = fontsData.sefaradi;

const DisplayErrors = () => {

    const [choosed, setChoosed] = useState(false);

    //     const renderErrors = () => {
    //         return (
    //             sefardiLetters.map(i => 
    //                 (i.info.map(j => 
    //                     (<p className="showItem" onClick={ () => {setChoosed(true); } }> {j.id} = {j.mistakeId}</p>) 
    //                 )
    //             )
    //         )
    //     );
    // };

    const FlatData = () => {
        return (
            console.log(fontsData.sefaradi.flatMap())
        );
    }

    return(
        <div className="showErros">
            {/* <ul>
                {renderErrors()}
            </ul>
            {choosed ? <DisplayImg /> : null } */}
            {FlatData()}
        </div>
  );
}

export default DisplayErrors;