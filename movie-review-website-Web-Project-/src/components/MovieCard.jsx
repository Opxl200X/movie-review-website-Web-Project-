// client/src/components/MovieCard.js
import React from 'react';
import './styles/MovieCard.css';
import { Link } from "react-router-dom";

function MovieCard({ title, score, image }) {
    return (
        <Link to="/MoviePage">
            <div className="movie-card">
                <div className="movie-thumbnail">
                    <img src={image} alt={title} />

                </div>
                <div className="movie-info">
                    <div className="movie-score">⭐ {score}</div>
                    <h4 className="movie-title">{title}</h4>
                </div>
            </div>
        </Link>
    );
}

export default MovieCard;
