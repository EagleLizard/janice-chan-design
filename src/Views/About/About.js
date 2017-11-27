import React from 'react';
import './About.css';

import images from '../../images';

export default class About extends React.Component {

  constructor(props){
    super(props);
  }

  render(props){
    return (
      <div className="about-page">
        <div className="about-content">
          <div className="about-header">
            hello,
          </div>
          <div className="about-content">
            I am a scenic designer and painter pursuing a B.F.A. in Theatre Design and Production with an emphasis in Scenic Design at Utah Valley University.
          </div>
        </div>
        <div className="about-image">
          <img
            src={images.JANU}
          />
        </div>
      </div>
    )
  }

}