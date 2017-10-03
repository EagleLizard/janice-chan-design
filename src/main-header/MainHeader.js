import React, {Component} from 'react';
import './MainHeader.css';
import logo from '../assets/WebsiteLogo-min.png';

export default class MainHeader extends Component{
  render(){
    return (
      <div className="main-header">
        <img src={logo} className="header-logo" alt="logo"/>
      </div>
    );
  }
}