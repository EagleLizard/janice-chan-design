import React from 'react';
import { Link } from 'react-router-dom'
import './TopNav.css';

import { VIEWS } from '../../Views/Views';

const NAV_VIEWS = [
  VIEWS.MAIN_NAV,
  VIEWS.ABOUT,
  VIEWS.CONTACT
];

export default class TopNav extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    let items = NAV_VIEWS.map((view)=>(
      <Link 
        to={view.path}
        className="top-nav-item"
        key={view.key}>
        <div className="nav-item-text">
          {
            view.title
          }
        </div>
      </Link>
    ))

    return (
      <div className="top-nav">
        {
          items
        }
      </div>
    )
  }

}