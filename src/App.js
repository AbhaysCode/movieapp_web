import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home'
import SingleMovie from './SingleMovie';
import Error from './Error.js';
import Movies from './Movies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path = '/movie' element={<Movies/>}/>
        <Route path='/movie/:id' element={<SingleMovie/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
