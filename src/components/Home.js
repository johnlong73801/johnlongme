import React, { Component } from 'react';
import chat from '../../src/assets/images/chat.png';
import jams from '../../src/assets/images/jams.png';

class Home extends Component{
  render(){
    return(
      <div className="home">
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-4">Welcome</h1>
            <p className="lead">
              This is my personal portfolio website built to showcase myself and my skills.
              Head over to <a href='/about'>About</a> to find out more about me or go to <a href='/projectlanding'>Projects</a> to
              see what I have been working on.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="jumbotron">
            <div className="container">
              <h1 className="display-4">Recent Projects</h1>
              <div className="row">
                <div className="col-sm-6">
                  <div className="container">
                    <div className="card">
                      <img className="card-img-top" src={chat} alt="Chat App"/>
                      <div className="card-body">
                        <h5 className="card-title">React Chat Application</h5>
                        <p className="card-text">A single page web application built using React and Firebase</p>
                        <a href="http://chat.johnlong.me/" className="btn btn-primary">Check it out</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="container">
                    <div className="card">
                      <img className="card-img-top" src={jams} alt="Jams App"/>
                      <div className="card-body">
                        <h5 className="card-title">React music streaming application</h5>
                        <p className="card-text">A single page web application built using React and react router</p>
                        <a href="http://jams.johnlong.me/" className="btn btn-primary">Check it out</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
