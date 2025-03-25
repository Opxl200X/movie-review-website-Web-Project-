import React from 'react';
import '../App.css';
import Footer from "../components/Footer";
import MovieCategory from "../components/MovieCategory";



function Category() {
    return (
        <div className='landing'>
            
            <MovieCategory />
            <Footer/>
        </div>
    )
}

export default Category;