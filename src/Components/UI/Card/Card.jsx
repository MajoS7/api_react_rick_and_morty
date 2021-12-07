import './Card.css';

export const Card = ({pruebas2}) => {

    return(
        <div className="card">
            <img className="imageCard" src={pruebas2.image} alt={pruebas2.name} />
            <h2>{pruebas2.name}</h2>
        </div>
    )

    
};
