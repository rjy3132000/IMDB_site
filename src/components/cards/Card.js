import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { Link } from "react-router-dom"
import "./Card.css";

function Card({movie}) {

    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=> {
            setIsLoading(false)
        }, 1500)
    }, []) 

  return (
    <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={1} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} className="cardLinkPopular" >
            <div className="cards">
                <img src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt={movie.title} className="cards__img" />
                <div className="cards__overlay">
                    <div className="card__title">{movie ? movie.original_title:""}</div>
                    <div className="card__runtime">
                        {movie ? movie.release_date:""}
                        <span className="card__rating">{movie ? movie.vote_average:""} <i className='fas fa-star' />{" "}</span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,120)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
  )
}

export default Card