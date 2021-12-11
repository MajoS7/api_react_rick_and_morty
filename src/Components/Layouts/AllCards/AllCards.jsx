import { Card } from "../../UI/Card/Card";
import './AllCards.css';

export const AllCards =({oneObjectResult})=>{
    console.log(oneObjectResult.name);
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
    else if(oneObjectResult.name=="Select a Name"){
        return(<div className="highInitial"></div>);
    }
    
    else{
        return(
            <div className="AllCards">
                <Card objectCard={oneObjectResult}/>
            </div>
        );
    }
    
}