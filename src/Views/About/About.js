import React from 'react';
import './About.css';

import imageUris from '../../image-uris';

export default class About extends React.Component {

  constructor(props){
    super(props);
  }

  render(props){
    return (
      <div className="about-page">
        <div className="about-content">
          <div className="about-text">
            <p>
              Janice Chan is a set designer and freelance artist based in Utah, U.S.A. She is pursuing a B.F.A. in Theatre Design and Production at Utah Valley University. Her upcoming projects include
              {/* <em>Next Fall</em>
              &nbsp;and Another Theatre Company's&nbsp;
              <em>The Drag</em> */}
              &nbsp;Utah Valley University's production of&nbsp;
              <em>The Laramie Project</em>
              .
            </p>
            <p className="contact-info">
              For inquiries, please email <a href="mailto:contact@janicechan.design">contact@janicechan.design</a>
            </p>
          </div>
        </div>
        <div className="about-image">
          <img
            src={imageUris.JANU}
          />
        </div>
      </div>
    )
  }

}