import React, { useEffect, useState } from 'react'
// import { MovieListing } from "../MovieListing/MovieListing";

import { useDispatch, useSelector } from "react-redux"
import { fetchAsyncMovies, fetchAsyncShows, getLoading } from '../../features/movies/movieSlice';
import MovieListing from '../MovieListing/MovieListing';
const Home = () => {
    // const [loading,setLoading]=useState(true);
    const loading = useSelector(getLoading);
    const movieText = "Harry", showText = "Friends";
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText))
        dispatch(fetchAsyncShows(showText))

    }, [dispatch]);
    console.log(loading);
    return (
        <div>
            {loading ? (<div style={{ color: 'white', fontSize: 'large' }}>...Loading...</div>) : (<MovieListing />)}

        </div>
    )
}

export default Home