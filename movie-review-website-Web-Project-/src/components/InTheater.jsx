// client/src/components/InTheater.js
import React from 'react';
import MovieCard from './MovieCard';
import './styles/InTheater.css';

function InTheater() {

    return (
        <div className="in-theater">
            <h2>In Theater</h2>
            <div className="theater-movies">
                <button className="nav-button left">❮</button>
                <div className="movie-cards">
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
                <button className="nav-button right">❯</button>
            </div>
        </div>
    );
}

export default InTheater;
