import React, { useEffect, useState } from 'react';
import './Main.css';
import { AllCards } from '../AllCards/AllCards';
import { SelectUI } from "../../UI/SelectUI/SelectUI";


export const Main =()=>{

    const [element, setElement] = useState([{name:'All Cards'}]);
    const [oneElement, setOneElement]=useState([{name:"rick", image:""}])
    const URL = 'https://rickandmortyapi.com/api/character/';

    const FetchApi=()=> { 
        fetch(URL)
        .then(response=>response.json())
        .then(data=>setElement(data.results))
    }
    useEffect(() =>{
        FetchApi('')
    },[])

    const Cards =(event)=>{
        element.map(item=>{
            if (event.target.value==item.id){
                setOneElement(item);
            }
        })
        if(event.target.value=="All Cards"){
            setOneElement(element);
        }
        
    }

    return(
        <div className="Main">
            <SelectUI prueba={element} prueba1={Cards}/>
            <AllCards pruebas={oneElement}/>  
        </div>
    );
}