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
          <div className="about-text">
          <p>
            I’m a scenic designer and painter based in Utah, U.S.A. I’m pursuing a B.F.A. in Theatre Design and Production with an emphasis in Scenic Design at Utah Valley University. Projects I’m currently working on include&ensp; 
            <em>Fat Pig</em>
            ,&ensp;
            <em>Tribes</em>
            ,&ensp;and&ensp;
            <em>Cabaret</em>
            .
          </p>
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