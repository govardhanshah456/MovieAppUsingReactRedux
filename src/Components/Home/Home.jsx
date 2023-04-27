import React, { useEffect } from 'react'
// import { MovieListing } from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux"
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import MovieListing from '../MovieListing/MovieListing';
const Home = () => {
    const movieText = "Harry", showText = "Friends";
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText))
        dispatch(fetchAsyncShows(showText))
    }, [dispatch]);
    return (
        <div>
            <div className='banner-img'>

            </div>
            <MovieListing />
        </div>
    )
}

export default Home