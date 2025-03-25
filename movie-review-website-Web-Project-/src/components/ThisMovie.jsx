import React, { useState } from "react";
import "./styles/ThisMovie.css";
import { movieData } from "./data/movies";

function ThisMovie() {
    const [comments, setComments] = useState([]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedRating, setSelectedRating] = useState(0);
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [totalRating, setTotalRating] = useState(0);

    const handleAddComment = () => {
        if (!comment || !selectedRating) {
            alert("กรุณากรอกคอมเมนต์และเลือกคะแนน");
            return;
        }

        const newComment = {
            username: username || "ไม่ระบุชื่อ",
            rating: selectedRating,
            comment: comment
        };

        setComments([...comments, newComment]);
        setTotalRating(totalRating + selectedRating);
        setPopupVisible(false);
        setUsername("");
        setComment("");
        setSelectedRating(0);
    };

    const averageRating = comments.length ? (totalRating / comments.length).toFixed(1) : 0;

    return (
        <div className="this-movie">
            <h1>Movie Review</h1>

            {/* Movie Section */}
            <div className="movie-section">
                <div className="movie-poster">
                    <img src={movieData.posterUrl} alt="Movie Poster" />
                </div>
                <div className="movie-details">
                    <h2>{movieData.title}</h2>
                    <p>{movieData.description}</p>
                    <p>ความยาว: {movieData.duration}</p>
                    <p>คะแนนเฉลี่ย: {averageRating}/10</p>
                </div>
            </div>

            {/* YouTube Video */}
            <div className="youtube-video">
                <iframe
                    src={movieData.trailerUrl}
                    title="YouTube video player"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Comments Section */}
            <div className="comments">
                <h2>ความคิดเห็น</h2>
                {comments.map((c, index) => (
                    <div className="comment" key={index}>
                        <h3>{c.username}</h3>
                        <p className="rating">คะแนน: {c.rating}/10</p>
                        <p>{c.comment}</p>
                    </div>
                ))}
            </div>

            {/* Add Comment Button */}
            <button className="add-comment-btn" onClick={() => setPopupVisible(true)}>
                เพิ่มคอมเมนต์
            </button>

            {/* Popup for Adding Comment */}
            {popupVisible && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <span className="close-popup" onClick={() => setPopupVisible(false)}>
                            &times;
                        </span>
                        <h2>ให้คะแนนและเขียนคอมเมนต์</h2>

                        {/* Star Rating */}
                        <div className="star-rating">
                            {[...Array(10)].map((_, i) => (
                                <span
                                    key={i}
                                    className={`star ${i + 1 <= selectedRating ? "full" : ""}`}
                                    onClick={() => setSelectedRating(i + 1)}
                                >
                                    &#9733;
                                </span>
                            ))}
                        </div>

                        <input
                            type="text"
                            placeholder="ชื่อผู้ใช้ (เว้นว่างหากไม่ระบุชื่อ)"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <textarea
                            placeholder="เขียนรีวิวของคุณที่นี่..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                        <button onClick={handleAddComment}>Submit</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ThisMovie;