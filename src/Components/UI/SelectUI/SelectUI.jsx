import './SelectUI.css';
import { AllCards } from '../../Layouts/AllCards/AllCards';

export const SelectUI =({prueba})=>{

    const enviarid =(event)=>{
        console.log(event);

    }

    return(
        <select onChange={enviarid(event.tarjet.value)} className="SelectUI">
            <option>Select a Name</option>
            <option >All Cards</option>
            {
                prueba.map(element=>(
                    <option value={element.id}>{element.name}</option>
                ))
            }
        </select>
    );
}