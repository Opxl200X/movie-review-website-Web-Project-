import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ErrorPage() {
  return (
    <>
    <Navbar/>
    <div>
      <h2>404 - Not Found</h2>
      <p>Oops! The page you're looking for doesn't exist.</p>
    </div>
    <Footer />
    </>
  );
}

export default ErrorPage;