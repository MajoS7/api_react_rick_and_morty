import './SelectUI.css';

export const SelectUI =({prueba})=>{

    return(
        <select  className="SelectUI">
            <option></option>
            <option >All Cards</option>
            {
                prueba.map(element=>(
                    <option value={element.id}>{element.name}</option>
                ))
            }
        </select>
    );
}