import React,{useContext} from 'react'
import {AppContext} from './context.js'

const Search = () => {
  const {isError,query,setQuery} = useContext(AppContext);
  return (
    <div className="search-section">
      <h2>Search Your Movie ..</h2>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text" 
        value={query} 
        onChange={(e)=>setQuery(e.target.value)}/>
      </form>
      <div className="card-error">
        <p>{isError.err&&isError.msg}</p>
      </div>
    </div>
  )
}

export default Search
