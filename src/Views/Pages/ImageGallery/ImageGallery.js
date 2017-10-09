import React, {Component} from 'react';
import './ImageGallery.css';

import {imageLoader} from '../../../common/common';

export default class ImageGallery extends Component{
  constructor(props){
    super(props);
    imageLoader.loadImages(this.props.imageGallery.images).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  }

  render(){
    return (
      <div className="image-gallery">
      </div>
    )
  }
}