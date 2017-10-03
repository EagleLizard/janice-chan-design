import React, { Component } from 'react';
import './App.css';

import LeftNav from './left-nav/LeftNav';
import { LEFT_NAV_ENUM } from './left-nav/LeftNavItems';
import MainHeader from './main-header/MainHeader';
import HoverDrawer from './hover-drawer/HoverDrawer';
import { getHoverItem } from './hover-drawer/HoverItem';
import { SECTIONS } from './Sections';
import { VIEW_ENUM, DEFAULT_VIEW } from './Views/Views';

let hoverItems = Object.keys(LEFT_NAV_ENUM).map(key=>getHoverItem(key));
let hoverItem = null;

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      view: DEFAULT_VIEW,
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

  navItemClicked(itemKey){
    console.log(itemKey);
  }

  render() {
    return (
      <div className="App">
        <div className="main-header-container">
          <MainHeader />
        </div>
        <div className="left-nav-container">
          <LeftNav
            navItems={ SECTIONS }
            itemKey={this.state.hoverItem}
            navItemHovered={this.navItemHovered.bind(this)}
            navItemClicked={this.navItemClicked.bind(this)}
          />
        </div>
        <div className="hover-drawer-container">
          <HoverDrawer 
            hoverItems={ SECTIONS }
            itemKey={this.state.hoverItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
