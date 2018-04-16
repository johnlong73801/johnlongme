import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ProjectLanding from './components/ProjectLanding';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to='/' className="navbar-brand">John Long</Link>
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to='/about' className="nav-link">About</Link></li>
            <li className="nav-item"><Link to='/projectlanding' className="nav-link">Projects</Link></li>
          </ul>
        </nav>
        <main>
          <div className="container">
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projectlanding' component={ProjectLanding} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
