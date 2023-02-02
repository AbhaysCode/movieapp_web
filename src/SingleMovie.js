import React,{useState,useEffect} from 'react'
import { useParams,NavLink } from 'react-router-dom'
import {MOVIE_URL} from './context'

const SingleMovie = () => {
  const {id} = useParams();
  const [isLoading,setIsLoading] = useState(true);
  const [movie,setMovie] = useState();
  const [isError,setIsError] = useState({"err":false,"msg":""});

  useEffect(() => {
  let timerOut = setTimeout(()=>{
      getMovies(`${MOVIE_URL}&i=${id}`);
  },800)
  return ()=>clearTimeout(timerOut)
  }, [id]);
  const getMovies = async(url) =>{
     try {
      const data = await fetch(url);
      const jsonData = await data.json();
      console.log("Data fetched in single Movie",jsonData);
      if(jsonData.Response === "True"){
          setMovie(jsonData);
          setIsLoading(false);
      }else{
          setIsError({"err":true,"msg":jsonData.Error})
          setIsLoading(false);
      }
  }catch(e){
      console.log("Error is",e);
  }
  }
  if(isLoading){
    return (
      <div className="movie-section">
          <div className="loading">
            Loading...
          </div>
      </div>
    )
  }
  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster}/>
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating}</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">Go Back</NavLink>
        </div>
      </div>
    </section>
  )
}

export default SingleMovie
