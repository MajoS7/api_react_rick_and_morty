import { Card } from "../../UI/Card/Card";
import './AllCards.css';

export const AllCards =({oneObjectResult})=>{

    if (oneObjectResult.length==20){
        return(
            <div className="AllCards">
                {oneObjectResult.map(item=>(
                    <Card objectCard={item}/>
                ))
                }
            </div>
        ); 
    }
    return(
        <div className="AllCards">
            <Card objectCard={oneObjectResult}/>
        </div>
    );
}