import React, { useEffect, useState } from 'react';
import './Select.css';
import { SelectUI } from "../../UI/SelectUI/SelectUI";


export const Select =()=>{

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

    return(
        <div className="Select">
            <SelectUI prueba={element}/>
        </div>
    );
}