import { useState, useEffect } from 'react'
import { index } from './services/starshipService';
import StarshipSearch from './components/StarshipSearch/StarshipSearch';
import StarshipList from './components/StarshipList/StarshipList';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayStarships, setDisplayStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const data = await index();
        setStarshipsData(data);
        // setDisplayStarships(data);
      } catch (error) {
        console.error('Error fetching starships:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStarships();
  }, []);
  
  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>{error}</div>; 
  }

  return (
    <>
      <h1>Star Wars API</h1>
      <StarshipSearch fetchStarships={starshipsData} />
      <StarshipList starshipsData={starshipsData} />
    </>
  )
}

export default App
