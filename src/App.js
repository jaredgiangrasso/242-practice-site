import React, { Component } from 'react';
import Tilt from 'react-tilt';

import logo from './images/Logo_Icon.png';
import twitter from './images/Twitter_icon.png';
import facebook from './images/Facebook_icon.png';
import instagram from './images/Instagram_icon.png';
import pedestal from './images/Pedestal.png';
import diamond from './images/Diamond.png';
import circle from './images/Circle_shadow.png';
import line from './images/line_gradient.png';
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
  <nav className="d-flex navbar justify-content-center fixed-top navbar-expand-lg">
    <ul className="navLinks nav navbar-nav flex-grow-1 justify-content-center">
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
    <img src={ logo } />
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
    <Tilt className="Tilt" options={{ max: 15, reverse: true, axis: 'x', scale: 1 }}>
      <div className="pedestal">
        <img src={ pedestal } />
      </div>
      <div className="diamond">
        <img src={ diamond } />
      </div>
      <div className="circle">
        <img src={ circle } />
      </div>
      <div className="line">
        <img src={ line } />
      </div>
      <div className="heading">
        <h1>Heading</h1>
      </div>
    </Tilt>

export default App;
