import React, { Component } from 'react';
import chat from '../../src/assets/images/chat.png';
import jams from '../../src/assets/images/jams.png';

class Home extends Component{

  render(){
    return(
      <div className="home">
        <h1>Welcome</h1>
        <p>
          This is my personal portfolio website built to showcase myself and my skills.
          Head over to <a href='/about'>About</a> to find out more about me or go to <a href='/projectlanding'>Projects</a> to
          see what I have been working on.
        </p>
        <h2>Recent Projects</h2>
        <div className="projects">
          <a href="http://chat.johnlong.me/">
            <h3>React Chat Application</h3>
            <img src={chat} alt="Chat App" />
          </a>
        </div>
        <div className="projects">
          <a href="http://jams.johnlong.me/">
            <h3>React music streaming application</h3>
            <img src={jams} alt="Jams App" />
          </a>
        </div>
      </div>
    )
  }
}

export default Home;
