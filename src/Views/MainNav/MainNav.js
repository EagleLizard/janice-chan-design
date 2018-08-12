import React from 'react';
import './MainNav.css';

import HoverDrawer from '../../hover-drawer/HoverDrawer';
import LeftNav from '../../left-nav/LeftNav';

import { getHoverItem, HOME_HOVER_ITEM } from '../../hover-drawer/HoverItem';
import { PROJECTS_HOME } from '../../Sections';

export default class MainNav extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      hoverItem: HOME_HOVER_ITEM
    };
  }

  navItemHovered(itemKey){
    this.setState((prev, props)=>({
      hoverItem: Object.assign({}, getHoverItem(itemKey))
    }));
  }

  navItemBlurred(itemKey){
    this.setState((prev, props)=>({
      hoverItem: HOME_HOVER_ITEM
    }));
  }

  render(props){
    return (
      <div className="main-nav">
        <div className="left-nav-container">
          <LeftNav
            navItems={ this.props.sections }
            itemKey={this.state.hoverItem}
            navItemHovered={this.navItemHovered.bind(this)}
            navItemBlurred={this.navItemBlurred.bind(this)}
            navItemClicked={this.props.navItemClicked}
          />
        </div>
        <div className="hover-drawer-container">
          <HoverDrawer 
            hoverItems={ [...this.props.sections, PROJECTS_HOME] }
            itemKey={this.state.hoverItem}
          />
        </div>
      </div>
    );
  }

}