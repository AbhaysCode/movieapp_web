import React,{useContext} from 'react'
import { AppContext } from './context';
import './App.css';
import { NavLink } from 'react-router-dom';
const Movies = () => {
  const {movies,isLoading} = useContext(AppContext);
  if(isLoading){
    return (
          <div className="loading">
            Loading...
          </div>
    )
  }
  return <section className='movie-page'>
    <div className='container grid grid-4-col'>
    {movies.map((currentMovie)=>{
    let {imdbID,Title,Poster} = currentMovie;
    if(Title.length > 15){
      Title = Title.substr(0,15) + "...";
    }
    return(
      <NavLink to={`movie/${imdbID}`} key={imdbID}>
        <div className='card'>
            <div className='card-info'>
              <h2>{Title}</h2>
              <img src={Poster}/>
            </div>
        </div>
      </NavLink>
    )})}
    </div>
  </section>
  }

export default Movies
