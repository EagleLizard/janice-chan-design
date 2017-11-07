import React, {Component} from 'react';
import './HoverDrawer.css';

export default class HoverDrawer extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="hover-drawers">
        {this.props.hoverItems.map(hoverItem=>{
            return (
              <div 
                className={(this.props.itemKey && hoverItem.key === this.props.itemKey.key) 
                            ?  'hover-drawer-open'
                            :  'hover-drawer-close'}
                
                key={hoverItem.key}>
                <span className="hover-photo-helper"/>
                {(hoverItem.hoverPhotoUrl)
                  ? <img 
                      className="hover-photo"
                      src={hoverItem.hoverPhotoUrl}/>
                  : ''
                }
              </div>
            )
          }
        )}
        <div className="background-layer hover-drawer-close">
        </div>
      </div>
    );
  }
}