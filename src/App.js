import React, { Component } from 'react';
import Tilt from 'react-tilt';

import logo from './images/Logo_Icon.png';
import twitter from './images/Twitter_icon.png';
import facebook from './images/Facebook_icon.png';
import instagram from './images/Instagram_icon.png';
import whiteLine from './images/White_line.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App grid-container'>
        < Navigation />
        < SocialNavigation />
        < Background />
      </div>
    );
  }
}

const Navigation = () =>
  <nav className="navbar"> 
    <ul>
      <li className="nav-item">
        <a className="nav-link" href="#">Lorem</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Ipsum</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Dolor</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Elit</a>
      </li>
    </ul>
  </nav>

const SocialNavigation = () =>
  <div className="socialContainer">
    <a>
      <img src={ logo } />
    </a>
    <img className="whiteLine" src={ whiteLine } />
    <a href="https://www.instagram.com/tj_kurek/">
      <img src={instagram} />
    </a>
    <a href="#">
      <img src={facebook} />
    </a>
    <a href="#">
      <img src={twitter} />
    </a>
  </div>

  const Background = () =>
    <Tilt className="tiltBackground" options={{ reverse: true, axis: "x", scale: .9, speed: 1000, max: 40 }}>
      <Tilt className="heading" options={{ reverse: true, axis: "x", scale: .9, speed: 1000, max: 10 }}>
        <h1>Heading</h1>
      </Tilt>
    </Tilt>

export default App;
