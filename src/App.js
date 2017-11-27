import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import MainHeader from './main-header/MainHeader';
import { SECTIONS } from './Sections';
import { VIEW_ENUM, DEFAULT_VIEW, VIEWS } from './Views/Views';
import MainNav from './Views/MainNav/MainNav';
import DetailPage from './Views/Pages/DetailPage';
import About from './Views/About/About';
import Contact from './Views/Contact/Contact';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      view: DEFAULT_VIEW,
      hoverItem: null,
      deailtPage: null
    };
  }

  navItemClicked(itemKey){
    this.setState((prev, props)=>{
      return Object.assign({}, {
        view: VIEW_ENUM.DETAIL_PAGE,
        detailPage: itemKey
      });
    });
  }

  render() {
    console.log('App.render');
    return (
      <div className="App">
        <div className="chrome-language-hack">
          Hey chrome, this page is definitely in English. Seriously, this is an English language website. For good measure, this is also an American website. This website was made in America by an American citizen. Thank you.
        </div>
        <div className="main-header-container">
          <MainHeader />
        </div>
        <Switch>
          <Route 
            exact={true} 
            path={VIEWS.MAIN_NAV.path}
            render={(props)=>(
                <MainNav 
                  sections={SECTIONS}
                  navItemClicked={this.navItemClicked.bind(this)}
                />
            )} 
          />
          <Route 
            path={VIEWS.DETAIL_PAGE.path}
            component={DetailPage}
          />
          <Route
            path={VIEWS.ABOUT.path}
            component={About}
          />
          <Route
            path={VIEWS.CONTACT.path}
            component={Contact}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
