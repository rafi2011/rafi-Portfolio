import React from 'react';

export default function Resume() {
  return (
    <div className="container">
      <div><br/><br/><br/><br/></div>
      <div class="row align-items-start">
        <div class="col">
        
        </div>
        <div class="col">
          <object
          data="./doc/Resume.pdf"
          type="application/pdf"
          width="500"
          height="678">

          <iframe
            src="./doc/Resume.pdf"
            width="500"
            height="678">
          <p>This browser does not support PDF!</p>
          </iframe>
          </object>
        </div>
        
        <div class="col">
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}