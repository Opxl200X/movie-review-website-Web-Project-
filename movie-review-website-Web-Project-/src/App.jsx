// App.jsx
import React from 'react';
import './App.css';
import Footer from './components/Footer.jsx';
import Trending from './components/Trending.jsx';
import Navbar from './components/Navbar.jsx';
import InTheater from './components/InTheater.jsx';
import Toprate from './components/Toprate.jsx';

function App() {
  return (<div className='landing'>
    <Navbar />
    <Trending />
    <InTheater />
    <Toprate />
    <Footer />
  </div>

  );

}

export default App;
