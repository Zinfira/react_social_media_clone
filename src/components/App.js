import React from 'react';
// import './App.css';
import Profile from './Profile.js';
import About from './About';
import NavBar from './NavBar';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Profile />
      <About />
    </React.Fragment>
  );
}

export default App;
