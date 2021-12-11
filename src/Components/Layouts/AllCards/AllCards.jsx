import { Card } from "../../UI/Card/Card";
import './AllCards.css';

export const AllCards =({pruebas})=>{
    console.log()
    if (pruebas.length==20){
        return(
            <div className="AllCards">
                {pruebas.map(it=>(
                    <Card pruebas3={it}/>
                ))
                }
            </div>
        );
        
    }
    
    
    return(
        <div className="AllCards">
            <Card pruebas3={pruebas}/>
        </div>
    );

    
    
        
    
        
    
    
    
    
    
}