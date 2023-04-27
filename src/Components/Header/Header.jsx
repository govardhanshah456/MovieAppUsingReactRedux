import React, { useState } from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
import user from "../../assets/user.jpg"
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
const Header = () => {
    const [term, setTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        dispatch(fetchAsyncMovies(term)).then(() => setLoading(false));
        dispatch(fetchAsyncShows(term)).then(() => setLoading(false));
    };
    console.log(term);
    return (
        <div className="header">
            <div className="logo">
                <Link to="/">
                    MovieMania
                </Link>
            </div>
            <div className='search-bar'>
                <form onSubmit={submitHandler}>
                    <input type="text" value={term} placeholder='Search Movies or Web Series' onChange={(e) => setTerm(e.target.value)} />
                    <button type='submit'><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div className='user-image'>
                <img src={user} alt="user" />
            </div>
            {loading && <p>Loading...</p>}
        </div>
    )
}

export default Header