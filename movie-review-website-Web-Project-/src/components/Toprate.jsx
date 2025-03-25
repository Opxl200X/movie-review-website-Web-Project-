// client/src/components/InTheater.js
import React, { useRef } from "react";
import MovieCard from './MovieCard';
import './styles/Toprate.css';
import { comedyMovies } from "./data/movies";


function Toprate() {
    
    const comedyRef = useRef(null);

    const moveCarousel = (direction, ref) => {
        const carousel = ref.current;
        const scrollAmount = 300; // ระยะการเลื่อน
        if (direction === "left") {
            carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div className="Toprate">
            <h2>Top rate</h2>
            <div className="Top-movies">
                <button className="nav-button left" onClick={() => moveCarousel("left", comedyRef)}>❮</button>
                <div className="movie-cards"  ref={comedyRef}>
                    {comedyMovies.map((movie, index) => (
                        <MovieCard key={index} title={movie.title} score={movie.score} image={movie.image} />
                    ))}
                </div>
                <button className="nav-button right" onClick={() => moveCarousel("right", comedyRef)}>❯</button>
            </div>
        </div>
    );
}

export default Toprate;
