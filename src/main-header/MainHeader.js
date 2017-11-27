import React, {Component} from 'react';
import './MainHeader.css';
import logo from '../assets/WebsiteLogo-min.png';

import TopNav from './top-nav/TopNav';

export default class MainHeader extends Component{
  render(){
    return (
      <div className="main-header">
        <div className="header-logo">
          <img src={logo} className="header-logo-image" alt="logo"/>
        </div>
        <div className="top-nav-container">
          <TopNav/>
        </div>
      </div>
    );
  }
}