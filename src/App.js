import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ProjectLanding from './components/ProjectLanding';
import './App.css';
import githubLogo from '../src/assets/images/github-logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav">
          <h1 className="logo">John Long</h1>
          <Link to='/about'>About</Link>
          <Link to='/projectlanding'>Projects</Link>
          <Link to='/'>Home</Link>
        </nav>
        <div className="contact">
          <h3>Contact me</h3>
          <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="john-long-73801">
            <a className="LI-simple-link" href='https://www.linkedin.com/in/john-long-73801?trk=profile-badge'>John Long</a>
          </div>
          <div className="github-profile">
            <a href="https://github.com/johnlong73801">
              <img src={githubLogo} alt="Github Logo"/>
              <h3>View my GitHub profile</h3>
            </a>
          </div>
        </div>

        <main>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projectlanding' component={ProjectLanding} />

        </main>
        <footer className="foot">
          <span>John Long</span>
        </footer>
      </div>
    );
  }
}

export default App;
