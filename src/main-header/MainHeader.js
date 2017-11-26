import React, {Component} from 'react';
import './MainHeader.css';
import logo from '../assets/WebsiteLogo-min.png';

export default class MainHeader extends Component{
  render(){
    return (
      <div className="main-header">
        <div className="header-logo">
          <img src={logo} className="header-logo-image" alt="logo"/>
        </div>
      </div>
    );
  }
}