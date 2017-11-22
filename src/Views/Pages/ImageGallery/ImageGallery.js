import React, {Component} from 'react';
import StackGrid from 'react-stack-grid';
import Lightbox from 'react-images';
import './ImageGallery.css';

import {imageLoader} from '../../../common/common';
import detailPageService from '../detailPageService';

const COLUMN_WIDTH = 300;
const COLUMN_WIDTH_STATIC = '.grid-sizer'

export default class ImageGallery extends Component{
  constructor(props){
    super(props);
    this.state = {
      loadingImages: true,
      imageData: [],
      staticLayout: this.props.imageGallery.staticLayout,
      lightboxImages: [],
      lightboxOpen: false,
      lightboxIdx: 0
    };
    console.log(this.state);
  }

  closeLightbox(){
    this.setState((prev,props)=>{
      return {
        lightboxOpen: false
      }
    });
  }

  openLightbox(imageId){
    console.log(imageId);
    this.setState((prev, props)=>{
      console.log(prev);
      return {
        lightboxOpen: true,
        lightboxIdx: imageId
      }
    });
  }

  gotoNextImage(){
    this.setState((prev, props)=>{
      return {
        lightboxIdx: this.state.lightboxIdx + 1
      }
    });
  }

  gotoPrevImage(){
    this.setState((prev, props)=>{
      return {
        lightboxIdx: this.state.lightboxIdx - 1
      }
    });
  }
  
  componentDidMount() {
    this.props.imageGallery.loadImages().then(res=>{
      let scaledImages = imageLoader.scaleImages(this.props.imageGallery.images, COLUMN_WIDTH) ;
      console.log(detailPageService.getLightboxFromImages(scaledImages));
      this.setState((prev,props)=>{
        console.log(prev);
        return {
          loadingImages: false,
          imageData: scaledImages,
          lightboxImages: detailPageService.getLightboxFromImages(scaledImages)
        };
      });
    })
  }

  render(){
    
    let childElems = this.state.imageData.map(image=>{
      return (
        <div 
          className="grid-item"
          key={image.id}>
          <img 
            src={image.src} 
            height={image.height} 
            width={image.width}
            onClick={this.openLightbox.bind(this, image.id)}
          />
        </div>
      );
    });

    return (
      <div className="image-gallery">
        <StackGrid
          className="image-gallery-grid"
          columnWidth={COLUMN_WIDTH}>
          {childElems}
        </StackGrid>
        {
          (this.state.loadingImages)
          ? ''
          : <Lightbox 
              images={this.state.lightboxImages}
              isOpen={this.state.lightboxOpen}
              onClose={this.closeLightbox.bind(this)}
              onClickNext={this.gotoNextImage.bind(this)}
              onClickPrev={this.gotoPrevImage.bind(this)}
              currentImage={this.state.lightboxIdx}
            />
        }
      </div>
    )
  }
}