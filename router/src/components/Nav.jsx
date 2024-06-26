import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Nav.css'; 

const Nav = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName');
    function logout() {
        localStorage.clear();
        navigate('/signin');
    }


    return (
        <div className="nav">
        <h3>Pokemon Router</h3>
        <span>Welcome, {userName}</span>
        <div>
            <button onClick={() => navigate('/')}>Home</button> 
            <button onClick={() => navigate('/wiki')}>Wiki</button> 
            <button onClick={() => navigate(-1)}>Go Back</button>
            <button onClick={() => navigate(1)}>Go Forward</button>
            <button onClick={() => logout()}>Log Out</button>
        </div>
        </div>
    );
};

export default Nav;