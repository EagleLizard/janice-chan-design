import React from 'react';
import './About.css';

import images from '../../images';
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
              Janice Chan is a set designer and painter based in Utah, U.S.A. She is currently pursuing a B.F.A. in Theatre Design and Production at Utah Valley University. Her upcoming projects include An Other Theater Company’s productions of&nbsp;
              <em>Next Fall</em>
              &nbsp;and&nbsp;
              <em>The Drag</em>
              ,&nbsp;and Utah Valley University's production of&nbsp;
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