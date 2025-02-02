import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = ({ starshipsData }) => {
    return (
        <section>

            <h2> Starships</h2>
            
            {starshipsData.length > 0 ? (
            <ul>
            {starshipsData.map((starship)=>(
                <StarshipCard key={starship.name} starship={starship}/>
            ))}
            </ul>

             ): 
            (
                <p> No starship found</p>
            )
            }
            </section>
    );
};



export default StarshipList;