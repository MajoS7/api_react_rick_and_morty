import React, { useEffect, useState } from 'react';
import './Main.css';
import { AllCards } from '../AllCards/AllCards';
import { SelectUI } from "../../UI/SelectUI/SelectUI";


export const Main =()=>{

    const [element, setElement] = useState([{name:'Select a name',image:''}]);
    const URL = 'https://rickandmortyapi.com/api/character/';

    const FetchApi=()=> { 
        fetch(URL)
        .then(response=>response.json())
        .then(data=>setElement(data.results))
    }
    useEffect(() =>{
        FetchApi('')
    },[])

    const PruebaCard =()=>{
        

    }

    return(
        <div className="Main">
            <SelectUI prueba={element}/>
            {/* <AllCards /> */}
        </div>
    );
}