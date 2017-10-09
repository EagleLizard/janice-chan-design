import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import MainHeader from './main-header/MainHeader';
import { SECTIONS } from './Sections';
import { VIEW_ENUM, DEFAULT_VIEW } from './Views/Views';
import MainNav from './Views/MainNav/MainNav';
import DetailPage from './Views/Pages/DetailPage';

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
        <div className="main-header-container">
          <MainHeader />
        </div>
        <Switch>
          <Route 
            exact={true} 
            path='/'
            render={(props)=>(
                <MainNav 
                  sections={SECTIONS}
                  navItemClicked={this.navItemClicked.bind(this)}
                />
            )} 
          />
          <Route 
            path='/work/:pageId'
            component={DetailPage}
          />
        </Switch>

      </div>
    );
  }
}

export default App;
