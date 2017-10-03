import React from 'react';
import {Component} from 'react';
import './LeftNav.css';

export default class LeftNav extends Component{
  render(){
    return (
      <div className="left-nav-items">
        {this.props.navItems.map(item=>{
          return (
            <div
              key={item.key} 
              className="left-nav-item"
              onMouseEnter={this.props.navItemHovered.bind(this, item.key)}
              onClick={this.props.navItemClicked.bind(this,item.key)}>
              <div 
                className="left-nav-item-text"
                style={{ 
                  color: (this.props.itemKey && (item.key === this.props.itemKey.key)) 
                          ? item.navColor : 'inherit' 
                }}>
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}