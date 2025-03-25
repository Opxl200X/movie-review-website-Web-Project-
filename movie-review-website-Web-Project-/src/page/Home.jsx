import React from 'react';
import '../App.css';
import Footer from '../components/Footer.jsx';
import Trending from '../components/Trending.jsx';
import InTheater from '../components/InTheater.jsx';
import Toprate from '../components/Toprate.jsx';

function Home() {
    return (
    <div className='landing'>
        
        <Trending />
        <Toprate />
        <InTheater />
        <Footer />
    </div>
    )
}

export default Home;