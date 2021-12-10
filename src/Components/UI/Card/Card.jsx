import './Card.css';

export const Card = ({pruebas3}) => {

    return(
        <div className="card">
            <img className="imageCard" src={pruebas3.image} alt={pruebas3.name} />
            <h2>{pruebas3.name}</h2>
        </div>
    ) 
};
