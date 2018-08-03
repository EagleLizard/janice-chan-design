
import { SECTION_ENUM } from '../../Sections';
import images from '../../images';
import imageUris from '../../image-uris';

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
    let currId = 0;
    let promises = this.imageUrls.map(imageUrl=>{
      return imageLoader.loadImage(imageUrl).then(data=>{
        return this.images.push(data.setSource(imageUrl).setId(currId++));
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
    imageUris.RENAISSANCE_FAIRE_GALLERY,
    // [
    //   images.Shield1,
    //   images.Shield2,
    //   images.Shield3,
    //   images.Shield4
    // ],
    true
  ),
  new Gallery(
    SECTION_ENUM.BYU,
    imageUris.BYU_GALLERY,
    // [
    //   images.BYU1,
    //   images.BYU2,
    //   images.BYU3,
    //   images.BYU4,
    //   images.BYU5,
    //   images.BYU6,
    //   images.BYU7,
    //   images.BYU8,
    //   images.BYU9
    // ],
    true
  ),
  new Gallery(
    SECTION_ENUM.SUNDANCE,
    imageUris.SUNDANCE_GALLERY,
    // [
    //   images.SUNDANCE1,
    //   images.SUNDANCE2,
    //   images.SUNDANCE3,
    //   images.SUNDANCE4,
    //   images.SUNDANCE5,
    //   images.SUNDANCE6,
    //   images.SUNDANCE7,
    //   images.SUNDANCE8,
    //   images.SUNDANCE9,
    //   images.SUNDANCE10,
    //   images.SUNDANCE11
    // ],
    true
  ),
  new Gallery(
    SECTION_ENUM.RENAISSANCE_NOW,
    imageUris.RENAISSANCE_NOW_GALLERY,
    // [
    //   images.RENAISSANCENOW1,
    //   images.RENAISSANCENOW2,
    //   images.RENAISSANCENOW3,
    //   images.RENAISSANCENOW4,
    //   images.RENAISSANCENOW5
    // ],
    true
  ),
  new Gallery(
    SECTION_ENUM.UVU,
    imageUris.UVU_GALLERY,
      // [
      // images.UVU1,
      // images.UVU2,
      // images.UVU3,
      // images.UVU4,
      // images.UVU5,
      // images.UVU6,
      // images.UVU7,
      // images.UVU8,
      // images.UVU9,
      // images.UVU10,
      // images.UVU11,
      // images.UVU12,
      // images.UVU13,
      // images.UVU14
      // ],
    true
  ),
  new Gallery(
    SECTION_ENUM.FAT_PIG,
    imageUris.FAT_PIG_GALLERY,
    // [
    //   images.FATPIG1,
    //   images.FATPIG2,
    //   images.FATPIG3,
    //   images.FATPIG4,
    //   images.FATPIG5,
    //   images.FATPIG6,
    //   images.FATPIG7,
    //   images.FATPIG8,
    //   images.FATPIG9,
    //   images.FATPIG10,
    //   images.FATPIG11,
    //   images.FATPIG12
    // ],
    true
  ),
  new Gallery(
    SECTION_ENUM.TRIBES,
    imageUris.TRIBES_GALLERY
    // [
    //   images.TRIBES1,
    //   images.TRIBES2,
    //   images.TRIBES3,
    //   images.TRIBES4,
    //   images.TRIBES5,
    //   images.TRIBES6,
    //   images.TRIBES7,
    //   images.TRIBES8,
    //   images.TRIBES9,
    //   images.TRIBES10,
    //   images.TRIBES11,
    //   images.TRIBES12,
    //   images.TRIBES13,
    //   images.TRIBES14
    // ]
  )
];