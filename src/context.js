import React,{useEffect, useState} from "react"
const AppContext = React.createContext()

export const MOVIE_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppProvider = ({children}) =>{
    const [isLoading,setIsLoading] = useState(true);
    const [movies,setMovies] = useState([]);
    const [isError,setIsError] = useState({"err":false,"msg":""});
    const [query,setQuery] = useState("Avenger");

    useEffect(() => {
    let timerOut = setTimeout(()=>{
        getMovies(`${MOVIE_URL}&s=${query}`);
    },500)
    return ()=>clearTimeout(timerOut)
    }, [query]);
    const getMovies = async(url) =>{
       setIsLoading(true)
       try {
        const data = await fetch(url);
        const jsonData = await data.json();
        console.log(jsonData);
        if(jsonData.Response === "True"){
            setMovies(jsonData.Search);
            setIsError({"err":false,"msg":""})
            setIsLoading(false);
        }else{
            setIsError({"err":true,"msg":jsonData.Error})
            setIsLoading(false);
        }
    }catch(e){
        console.log("Error is",e);
    }
    }
    return (<AppContext.Provider value={{isLoading,movies,isError,query,setQuery}}>
        {children}
    </AppContext.Provider>)
}
export {AppProvider,AppContext}