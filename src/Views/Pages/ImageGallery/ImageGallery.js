import React, {Component} from 'react';
import './ImageGallery.css';

import {imageLoader} from '../../../common/common';

const COLUMN_WIDTH = 300;
const COLUMN_WIDTH_STATIC = '.grid-sizer'

let masonryOptions = {
  transitionDuration: 0,
  horizontalOrder: true,
  itemSelector: '.grid-item'
};

export default class ImageGallery extends Component{
  constructor(props){
    super(props);
    this.state = {
      loadingImages: true,
      imageData: [],
      staticLayout: this.props.imageGallery.staticLayout
    };
    this.masonryRef = null; // reference to component, get during render
    console.log(this.state);
  }

  handleLayoutComplete() {
    if(this.masonryRef !== null){
      console.log(this.masonryRef);
      this.masonryRef.masonry.layout();
    }
  }
  
  componentDidMount() {
    console.log(this.masonryRef);
    // this.masonryRef.masonry.on('layoutComplete', this.handleLayoutComplete.bind(this));
    this.props.imageGallery.loadImages().then(res=>{
      // let scaledImages = this.state.staticLayout
      //   ? this.props.imageGallery.images
      //   : imageLoader.scaleImages(this.props.imageGallery.images, COLUMN_WIDTH) ;
      let scaledImages = imageLoader.scaleImages(this.props.imageGallery.images, COLUMN_WIDTH) ;
      masonryOptions.columnWidth = this.state.staticLayout
        ? COLUMN_WIDTH_STATIC
        : COLUMN_WIDTH ;
      console.log(scaledImages);
      this.handleLayoutComplete();
      this.setState((prev,props)=>{
        console.log(prev);
        return {
          loadingImages: false,
          imageData: scaledImages
        };
      });
    })
  }

  componentWillUnmount(){
    // this.masonryRef.masonry.off('layoutComplete', this.handleLayoutComplete.bind(this));
  }

  render(){
    
    let childElems = this.state.imageData.map(image=>{
      return (
        <li className="grid-item">
          <img src={image.src} height={image.height} width={image.width}/>
        </li>
      );
    });

    return (
      <div className="image-gallery">
        {childElems}
      </div>
    )
  }
}