import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        < Navigation />
        < Header />
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
  <nav className="navbar justify-content-center navbar-fixed-top navbar-expand-lg">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Lorem</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Ipsum</a>
      </li>
      <li className="nav-item">
        <a className="nav-item nav-link" href="#">Dolor</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Elit</a>
      </li>
    </ul>
  </nav>


export default App;
