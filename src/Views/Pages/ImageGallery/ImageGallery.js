import React, {Component} from 'react';
import StackGrid from 'react-stack-grid';
import './ImageGallery.css';

import {imageLoader} from '../../../common/common';

const COLUMN_WIDTH = 300;
const COLUMN_WIDTH_STATIC = '.grid-sizer'

export default class ImageGallery extends Component{
  constructor(props){
    super(props);
    this.state = {
      loadingImages: true,
      imageData: [],
      staticLayout: this.props.imageGallery.staticLayout
    };
    console.log(this.state);
  }
  
  componentDidMount() {
    this.props.imageGallery.loadImages().then(res=>{
      let scaledImages = imageLoader.scaleImages(this.props.imageGallery.images, COLUMN_WIDTH) ;
      console.log(scaledImages);
      this.setState((prev,props)=>{
        console.log(prev);
        return {
          loadingImages: false,
          imageData: scaledImages
        };
      });
    })
  }

  render(){
    
    let childElems = this.state.imageData.map(image=>{
      return (
        <div className="grid-item">
          <img src={image.src} height={image.height} width={image.width}/>
        </div>
      );
    });

    return (
      <StackGrid
        className="image-gallery"
        columnWidth={COLUMN_WIDTH}>
        {childElems}
      </StackGrid>
      // <div className="image-gallery">
      //   {childElems}
      // </div>
    )
  }
}