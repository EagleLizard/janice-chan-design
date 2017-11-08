
import { SECTION_ENUM } from '../../Sections';
import images from '../../images';

import Q from 'q';

import {imageLoader} from '../../common/common';

const BASE_URL = '../../assets/gallery/';

class Gallery {
  constructor(key, imageUrls, staticLayout){
    this.key = key;
    this.images = [];
    this.imageUrls = imageUrls;
    this.staticLayout = staticLayout;
    this.imagesLoaded = false;
  }
  loadImages(){
    if(this.imagesLoaded){
      return Q.when(this.images);
    }
    let promises = this.imageUrls.map(imageUrl=>{
      return imageLoader.loadImage(imageUrl).then(data=>{
        return this.images.push(data.setSource(imageUrl));
      })
    });
    return Q.all(promises).then((res)=>{
      this.imagesLoaded = true;
      return res;
    });
  }
}

export const DEFAULT_GALLERY = new Gallery(
  null,
  []
);

export const GALLERIES = [
  new Gallery(
    SECTION_ENUM.RENAISSANCE_FAIRE, 
    [
      images.Shield1,
      images.Shield2,
      images.Shield3,
      images.Shield4
    ],
    true
  ),
  new Gallery(
    SECTION_ENUM.BYU,
    [
      images.BYU1,
      images.BYU2,
      images.BYU3,
      images.BYU4,
      images.BYU5,
      images.BYU6,
      images.BYU7,
      images.BYU8,
      images.BYU9
    ],
    true
  ),
  new Gallery(
    SECTION_ENUM.SUNDANCE,
    [
      images.SUNDANCE1,
      images.SUNDANCE2,
      images.SUNDANCE3,
      images.SUNDANCE4,
      images.SUNDANCE5,
      images.SUNDANCE6,
      images.SUNDANCE7,
      images.SUNDANCE8,
      images.SUNDANCE9,
      images.SUNDANCE10,
      images.SUNDANCE11
    ],
    true
  )
];