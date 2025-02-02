
const StarshipCard = ({starship}) => {

    return (
        <>
        <p>Name:{starship.name}</p>
        <p>Class:{starship.starship_class}</p>
        <p>Manufacture:{starship.manufacturer}</p>
        <p>Model:{starship.model}</p>
        </>
    );


};


export default StarshipCard;