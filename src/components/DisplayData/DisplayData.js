import React, { useState } from 'react';
import './DisplayData.css';
import fontsData from '../../data/fontsData.json';
import DisplayErrors from '../DisplayErrors/DisplayErrors';

const sefardiLetters = fontsData.sefaradi;
// console.log(sefardiLetters);

 const DisplayData = () => {

    const [clicked, setClicked] = useState(false);

    // const renderMistakeId = (letter) => {
    //     sefardiLetters.filter(i => i.name === letter).map(j=> 
    //         (j.info.map(k=> (<h6> {k.mistakeId} </h6>))))
    // }

    // const renderFakeData = () => {
    //     return (
    //         fakeSefaradi.flatMap(i => 
    //             (<p key={i} className="showData" onClick={ () => {setClicked(true);
    //             //    {renderMistakeId(i.name)}
    //             } }> {i.info} = {i.mistakeId} </p>)
    //         )        
    //     );
    // }

    const renderData = () => {
        return (
            sefardiLetters.map (i => (<p key={i} className="showData" onClick={ () => {setClicked(true);
            } } > {i.value} = {i.name} </p>))
        );
    }

    return (
        <div className="showLetters">
            <ul> {renderData()} </ul>
            {/* {clicked ? <DisplayErrors /> : null} */}
        </div>
  );
}

export default DisplayData;