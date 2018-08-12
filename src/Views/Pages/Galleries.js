
import { SECTION_ENUM } from '../../Sections';
import imageUris from '../../image-uris';

import Q from 'q';

import {imageLoader} from '../../common/common';

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
    SECTION_ENUM.CABARET,
    imageUris.CABARET_GALLERY,
    true
  ),
  new Gallery(
    SECTION_ENUM.NEXT_FALL,
    imageUris.NEXT_FALL_GALLERY,
    true
  ),
  new Gallery(
    SECTION_ENUM.AGAMEMNON,
    imageUris.AGAMEMNON_GALLERY,
    true
  ),
  new Gallery(
    SECTION_ENUM.RENAISSANCE_FAIRE, 
    imageUris.RENAISSANCE_FAIRE_GALLERY,
    true
  ),
  new Gallery(
    SECTION_ENUM.BYU,
    imageUris.BYU_GALLERY,
    true
  ),
  new Gallery(
    SECTION_ENUM.SUNDANCE,
    imageUris.SUNDANCE_GALLERY,
    true
  ),
  new Gallery(
    SECTION_ENUM.RENAISSANCE_NOW,
    imageUris.RENAISSANCE_NOW_GALLERY,
    true
  ),
  new Gallery(
    SECTION_ENUM.UVU,
    imageUris.UVU_GALLERY,
    true
  ),
  new Gallery(
    SECTION_ENUM.FAT_PIG,
    imageUris.FAT_PIG_GALLERY,
    true
  ),
  new Gallery(
    SECTION_ENUM.TRIBES,
    imageUris.TRIBES_GALLERY
  )
];