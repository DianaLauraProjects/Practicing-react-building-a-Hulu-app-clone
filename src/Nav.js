import React from 'react'
import "./Nav.css"
import requests from "./requests" ;

function Nav({ setSelectedOption }) {
    return (
        <div className="nav">
            <h2 onClick={()=>setSelectedOption(requests.fetchTrending)}>Trending</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchActionMovies)}>action</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchComediesMovies)}>Comedy</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchHorrorMovies)}>Horror</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchRomanceMovies)}>Romance</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchMystery)}>Mystery</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchSciFi)}>Sci-fi</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchWestern)}>Western</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchAnimation)}>animation</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchTV)}>Movie</h2>
        </div>
    )
}

export default Nav
