// import React, { useState } from 'react';

// import './SelectFont.css';

// import fontsData from '../../data/fontsData.json';

// import DisplayData from '../DisplayData/DisplayData';
// const showJsonData =  <DisplayData /> ;

// const alefSefardiName = fontsData.sefaradi[0].name;
// const alefSefardiValue = fontsData.sefaradi[0].value;

// const alefHaariiName = fontsData.haari[0].name;
// const alefHaariValue = fontsData.haari[0].value;

// const showData = () => {
//     <p> {`${alefSefardiName}=${alefSefardiValue}`} </p>;
// }

// const SelectFont = (props) => {

//     const [selectValue, setSelectValue] = useState('ספרדי');

//     const handleFontChange = (event) => {

//         return (
//             <div>
//                 <DisplayData />
//             </div> 
//         );
//         // dont use event.target.value - .event is correct
//         if (event = selectValue){
//             console.log (`${alefSefardiName}=${alefSefardiValue}`);
             
//         }
//         if (event = 'האר"י') {
//             console.log (`${alefHaariiName}=${alefHaariValue}`);
//         }
//         else {
//             console.log ('error');
//             setSelectValue(event);
//         }
//         setSelectValue(event);    
//     }

//     return(
//         <div>
//            <select className="styleSelect" onChange={handleFontChange} >
//                 <option value="sefaradi" >ספרדי</option>
//                 <option value="betYosef"  >בית יוסף</option>
//                 <option value="haari" >האר"י</option>
//                 <option value="ashkenazi">אשכנזי</option>
//                 <option value="temani">תימני</option>
//            </select> 
//         </div>
//     );
// }

// export default SelectFont;


import React, { useState } from 'react';

import './SelectFont.css';

import fontsData from '../../data/fontsData.json';

import DisplayData from '../DisplayData/DisplayData';
const showJsonData =  <DisplayData /> ;

const alefSefardiName = fontsData.sefaradi[0].name;
const alefSefardiValue = fontsData.sefaradi[0].value;

const alefHaariiName = fontsData.haari[0].name;
const alefHaariValue = fontsData.haari[0].value;

const showData = () => {
    <p> {`${alefSefardiName}=${alefSefardiValue}`} </p>;
}

const SelectFont = () => {

    const [selectValue, setSelectValue] = useState('בית יוסף');

    //{target} -restruct event given object
    const handleFontChange = ({ target }) => {
        setSelectValue(target.value);    
    }

    const myFun = () => {
        return (
            selectValue === 'ספרדי' && <DisplayData/>
        )
    }

    return(
        <div>
           <select className="styleSelect" onChange={handleFontChange} >
                <option value="ספרדי">
                    ספרדי
                </option>
                <option value="betYosef">בית יוסף</option>
                <option value="haari" >האר"י</option>
                <option value="אשכנזי">"אשכנזי</option>
                <option value="תימני">"תימני</option>
           </select> 
           {myFun()}
        </div>
    );
}

export default SelectFont;