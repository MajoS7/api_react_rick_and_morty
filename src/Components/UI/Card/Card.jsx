import './Card.css';

export const Card = ({objectCard}) => {

    return(
        <div className="card">
            <img className="imageCard" src={objectCard.image} alt={objectCard.name} />
            <h2>{objectCard.name}</h2>
        </div>
    ) 
};
