import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, 
  RouterProvider } from 'react-router-dom';
import Home from './page/Home';
import ErrorPage from './page/Error';
import Profile from './page/Profile';
import MoviePage from './page/MoviePage';
import Login from './Login';
import Register from './Register';
import Navbar from './components/Navbar';
import './index.css'
import Category from './page/Category';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [mysqlData, setMysqlData] = useState([]);
    const [mongodbData, setMongodbData] = useState([]);

    useEffect(() => {
        // ดึงข้อมูลจาก MySQL
        axios.get("http://localhost:8080/mysql")
            .then(response => setMysqlData(response.data))
            .catch(error => console.error('Error fetching MySQL data:', error));

        // ดึงข้อมูลจาก MongoDB
        axios.get("http://localhost:8080/mongodb")
            .then(response => setMongodbData(response.data))
            .catch(error => console.error('Error fetching MongoDB data:', error));
    }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          <Home />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: '/Profile',
      element: (
        <>
          <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          <Profile />
        </>
      ),
    },
    {
      path: '/MoviePage',
      element: (
        <>
          <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          <MoviePage />
        </>
      ),
    },
    {
      path: '/Category',
      element: (
        <>
          <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          <Category />
        </>
      ),
    },
    {
      path: '/Login',
      element: <Login onLogin={handleLogin} />,
    },
    {
      path: '/register',
      element: <Register onLogin={handleLogin} />,
    },
  ]);

  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
