import React, { Component } from 'react';
import logo from './images/Logo_Icon.png';
import twitter from './images/Twitter_icon.png';
import facebook from './images/Facebook_icon.png';
import instagram from './images/Instagram_icon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        < Navigation />
        < Header />
        < SocialNavigation />
      </div>
    );
  }
}

const Header = () => 
  <div className='container'>
    <div className='row'>
      <div className='col-lg-12'>
        <h1>Heading</h1>
      </div>
    </div>
  </div>

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
    <ul className='nav navbar-nav'>
      <li className='nav-item'>
        <a className="navbar-brand navbar-right" href="#">
          <img src={logo} />
        </a>
      </li>
    </ul>
  </nav>

const SocialNavigation = () =>
  <div className="socialContainer">
    <ul>
      <li>
        <a href="#">
          <img src={instagram} />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={facebook} />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={twitter} />
        </a>
      </li>
    </ul>
  </div>


export default App;
