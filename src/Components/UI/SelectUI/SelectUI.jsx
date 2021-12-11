import './SelectUI.css';

export const SelectUI =({objectResult, eventOneObject})=>{

    return(
        <select onChange={eventOneObject}  className="SelectUI">
            <option>Select a Name</option>
            <option >All Cards</option>
            {
                objectResult.map(element=>(
                    <option value={element.id}>{element.name}</option>
                ))
            }
        </select>
    );
}