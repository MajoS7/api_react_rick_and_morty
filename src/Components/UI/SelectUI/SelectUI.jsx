import './SelectUI.css';


export const SelectUI =({prueba, prueba1})=>{

    return(
        <select onChange={prueba1}  className="SelectUI">
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