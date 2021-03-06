import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './MainHeader.css';
import imageUris from '../image-uris';

import TopNav from './top-nav/TopNav';

import { VIEWS } from '../Views/Views';

export default class MainHeader extends Component{
  render(){
    return (
      <div className="main-header">
        <div className="header-logo">
          <Link to={VIEWS.MAIN_NAV.path}>
            <img src={imageUris.LOGO} className="header-logo-image" alt="logo"/>
          </Link>
        </div>
        <div className="top-nav-container">
          <TopNav/>
        </div>
      </div>
    );
  }
}