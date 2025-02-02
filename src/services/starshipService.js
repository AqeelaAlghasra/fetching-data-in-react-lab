const BASE_URL = 'https://swapi.dev/api/starships/';


const index = async () => {
   
  try{
    const res = await fetch(BASE_URL);
    if(!res.ok){
        throw new Error('Failed to fetch starships.');
    }
        const data = await res.json();
        console.log('Data:', data.results);
        
        return data.results;
      }catch(err){
        console.log('Error fetching starships',err)
        throw err;
        
      }
  };

//   show('New York');

  export { index };