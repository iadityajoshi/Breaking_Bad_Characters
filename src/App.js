import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';
import Header from './Components/UI/Header'
import CharacterDisplay from './Components/Characters/CharacterDisplay'
import Search from './Components/UI/Search';


const App = () => {
  const [items, setItems] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const queryHandler = (input) => {
    setSearchQuery(input);
  }

  useEffect(
    () => {
      const fetchData = async() => {
        const res = await axios(`https://www.breakingbadapi.com/api/characters?name=${searchQuery}`);
        
        console.log(res.data); 
        setItems(res.data);
        setIsLoading(false);
      }

      fetchData();
    }, [searchQuery])
  
  return (
    <div className="container">
      <Header/>
      <Search getQuery= {queryHandler} />
      <CharacterDisplay items= {items} loadingStatus ={isLoading} />
    </div>
  );
}

export default App;
