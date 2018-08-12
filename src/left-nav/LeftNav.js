import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.css';

export default class LeftNav extends Component{
  render()
  {
    console.log(this.props.navItems);
    return (
      <div className="left-nav-items">
        {this.props.navItems.map(item=>{
          return (
            <Link to={item.pageUrl}
              style={{ textDecoration: 'none' }}
              key={item.key}>
            <div 
              className="left-nav-item"
              onMouseEnter={this.props.navItemHovered.bind(this, item.key)}
              onMouseLeave={this.props.navItemBlurred.bind(this, item.key)}
              onClick={this.props.navItemClicked.bind(this,item.key)}>
              <div 
                className="left-nav-item-text">
                {item.title}
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    );
  }
}