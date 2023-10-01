
import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

// Api Key afb8b459

const API_URL = 'http://www.omdbapi.com?apikey=afb8b459'

const App = ()=> {
  
  const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('')
  const searchMovies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() =>{
    searchMovies('Spiderman')
  },[]);
  
  return (
    <div className="App">
      <h1>FilmList</h1>

      <div className='search'>
        <input 
          placeholder='Search fro movies'
          value={searchTerm}
          onChangeCapture={(e)=> setSearchTerm(e.target.value)}
        />
        <img 
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies.length  > 0 ? 
        (
          <div className='container'> 
            {movies.map((movie) => ( 
              <MovieCard movie={movie} />
            ))}
          </div>
        ):(
            <div className='empty'>
             <h2>No Movies Found</h2>
            </div>
          ) 
      }
    </div>
  );
}

export default App;
