import React, {Component} from 'react';
import './FadeIn.css';

export default class FadeIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      style: {
        opacity: 0
      }
    }
  }
  render(){
    setTimeout(()=>{
      this.setState((prev,props)=>{
        return {
          style: {
            opacity: 1
          }
        }
      });
    }, this.props.delay);
    return (
      <div 
        className="fade-in"
        style={ this.state.style }>
        {
          this.props.children
        }
      </div>
    )
  }
}