
import { SECTION_ENUM } from '../../Sections';
import images from '../../images';

const BASE_URL = '../../assets/gallery/';

class Gallery {
  constructor(key, images){
    this.key = key;
    this.images = images;
  }
}

export const DEFAULT_GALLERY = new Gallery(
  null,
  '',
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
    ]
  )
];