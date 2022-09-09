import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/home/Home';
import MovieList from "./components/movieList/movieList";
import MovieDetails from './pages/movieDetails/MovieDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={ <Home /> }></Route>
          <Route path="movie/:id" element={ <MovieDetails /> }></Route>
          <Route path="movies/:type" element={ <MovieList /> }></Route>
          <Route path="/*" element={ <h1>Page Not Found</h1> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;