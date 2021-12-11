import React, { useEffect, useState } from 'react';
import './Main.css';
import { AllCards } from '../AllCards/AllCards';
import { SelectUI } from "../../UI/SelectUI/SelectUI";


export const Main =()=>{

    const [element, setElement] = useState([{name:'All Cards'}]);
    const [oneElement, setOneElement]=useState({name:"Select a Name"})
    const URL = 'https://rickandmortyapi.com/api/character/';

    const FetchApi=()=> { 
        fetch(URL)
        .then(response=>response.json())
        .then(data=>setElement(data.results))
    }
    useEffect(() =>{
        FetchApi('')
    },[])

    const manageCards =(event)=>{
        element.map(item=>{
            if (event.target.value==item.id){
                setOneElement(item);
            }
        })
        if(event.target.value=="All Cards"){
            setOneElement(element);
        }
        else if(event.target.value=="Select a Name"){
            setOneElement({name:"Select a Name"});
        }
        
    }

    return(
        <div className="Main">
            <SelectUI objectResult={element} eventOneObject={manageCards} />
            <AllCards oneObjectResult={oneElement}/>  
        </div>
    );
}