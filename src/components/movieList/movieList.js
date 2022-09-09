import React, { useEffect, useState } from 'react';
import Card from '../cards/Card';
import { useParams } from "react-router-dom"
import "./movieList.css";

function MovieList() {
    
    let [movieList, setMovieList] = useState([])
    let { type } = useParams();

    useEffect(()=> {
        getData()
    }, [])

    useEffect(()=> {
        getData()
    }, [type])
    

    let getData = ()=> {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

  return (
    <div className='movie__list'>
        <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
        <div className="list__cards">
            {
                movieList.map((movie)=> (
                    <Card movie = {movie} />
                ))
            }
        </div>
    </div>
  )
}

export default MovieList