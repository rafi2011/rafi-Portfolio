import React from 'react';

import "./About.css";


export default function About() {
  return (
    <div className="container-fluid about">
      <div><br/><br/></div>
      <h1 className="heading">Bio</h1>
      
      <p className="text-centered">
      Columbia University Coding Bootcamp Graduate.
      </p>
      <div class="row align-items-start">
        <div class="col">
        
        </div>
        <div class="col">
        <img src="./images/IMG-6482.jpg" className="img-responsive" height="300px"/>
        </div>
        <div class="col">
        </div>
      </div>
      
      <p className="text-centered">I work closely with the developers in a scrum team and I became very interested in how they work.</p>

      <div><br/><hl/><br/></div>

      <h1 className="heading">Skills <i className = "fa fa-code"></i></h1>
      <ul class="twocolumns">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Python</li>
          <li>JQuery</li>
          <li>MySQL</li>
          <li>NoSQL</li>
          <li>MongoDB</li>
          <li>React</li>
          <li>Express.js</li>
          <li>Node.js</li>
      </ul>

      <div><br/><br/><br/><br/><br/><br/><br/><br/></div>
    </div>
  );
}