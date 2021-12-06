import './SelectUI.css';
import React, { useEffect } from 'react';


export const SelectUI =(prueba)=>{

    
    console.log(prueba);
    
    // const llenar=()=>{
    //     malp.map(item=>{
    //         console.log(item.name);
    //         return item.name;
    //     })
    // }
    // useEffect(() =>{
    //     llenar('')
    // },[])

    return(
        <select  className="SelectUI">
            <option></option>
            <option >All Cards</option>
        </select>
    );
}