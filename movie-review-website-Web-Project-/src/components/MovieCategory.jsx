import React, { useRef } from "react";
import "./styles/Category.css";
import MovieCard from "./MovieCard";
import { horrorMovies, comedyMovies } from "./data/movies";

function MovieCategory() {
    const horrorRef = useRef(null);
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
        <div className="category">
            <h1>Movie Categories</h1>

            {/* Horror Section */}
            <h2>Horror</h2>
            <div className="category-movies">
                <button className="nav-button left" onClick={() => moveCarousel("left", horrorRef)}>❮</button>
                <div className="movie-cards" ref={horrorRef}>
                    {horrorMovies.map((movie, index) => (
                        <MovieCard key={index} title={movie.title} score={movie.score} image={movie.image} />
                    ))}
                </div>
                <button className="nav-button right" onClick={() => moveCarousel("right", horrorRef)}>❯</button>
            </div>

            {/* Comedy Section */}
            <h2>Comedy</h2>
            <div className="category-movies">
                <button className="nav-button left" onClick={() => moveCarousel("left", comedyRef)}>❮</button>
                <div className="movie-cards" ref={comedyRef}>
                    {comedyMovies.map((movie, index) => (
                        <MovieCard key={index} title={movie.title} score={movie.score} image={movie.image} />
                    ))}
                </div>
                <button className="nav-button right" onClick={() => moveCarousel("right", comedyRef)}>❯</button>
            </div>
        </div>
    );
}

export default MovieCategory;
