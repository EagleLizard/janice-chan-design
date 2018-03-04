import React, {Component} from 'react';
import './HoverDrawer.css';

export default class HoverDrawer extends Component{
  constructor(props){
    super(props);
    this.state = {
      deferImageLoad: false
    };
  }
  render(){
    let self = this;
    // Defer the rendering of the image loading to prevent initial jenk when
    //  caused by all of the hover drawer photos trying to load at once
    setTimeout(()=>{
      window.requestAnimationFrame(()=>{
        self.setState((prev, props)=>{
          return Object.assign({}, {
            deferImageLoad: true
          });
        });
      });
    }, 100);
    return(
      <div className="hover-drawers">
        {
          (this.state.deferImageLoad)
            ? this.props.hoverItems.map(hoverItem=>{
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
              })
          : ''
        }
        <div className="background-layer hover-drawer-close">
        </div>
      </div>
    );
  }
}