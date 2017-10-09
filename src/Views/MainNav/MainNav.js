import React from 'react';
import './MainNav.css';

import HoverDrawer from '../../hover-drawer/HoverDrawer';
import LeftNav from '../../left-nav/LeftNav';

import { getHoverItem } from '../../hover-drawer/HoverItem';

export default class MainNav extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      hoverItem: null
    };
  }

  navItemHovered(itemKey){
    this.setState((prev, props)=>({
      hoverItem: Object.assign({}, getHoverItem(itemKey))
    }));
    setTimeout(()=>{
      console.log(this.state.hoverItem.color);
    })
  }

  render(props){
    return (
      <div className="main-nav">
        <div className="left-nav-container">
          <LeftNav
            navItems={ this.props.sections }
            itemKey={this.state.hoverItem}
            navItemHovered={this.navItemHovered.bind(this)}
            navItemClicked={this.props.navItemClicked}
          />
        </div>
        <div className="hover-drawer-container">
          <HoverDrawer 
            hoverItems={ this.props.sections }
            itemKey={this.state.hoverItem}
          />
        </div>
      </div>
    );
  }

}