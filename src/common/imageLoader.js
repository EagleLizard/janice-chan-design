import Q from 'q';

export default {
  loadImage: loadImage,
  loadImages: loadImages,
  scaleImages: scaleImages
};

class ImageData {
  constructor(img, rawSrc){
    this.width = img.width;
    this.height = img.height;
    this.src = '';
    this.rawSrc = rawSrc;
    this.id = -1;
    this.img = img;
  }
  setSource(src){
    this.src = src;
    return this;
  }
  setId(id){
    this.id = id;
    return this;
  }
}

function loadImages(images, width){
  return Q.all(images.map(image=>loadImage(image, width)));
}

function loadImage(imageUrl, width){
  let deferred = Q.defer();
  let image = new Image();
  image.onload = function(){
    deferred.resolve(new ImageData(this, imageUrl));
  }
  image.onerror = function(){
    deferred.reject(this);
  }
  image.src = (width !== undefined)
    ? `${imageUrl}?width=${width}`
    : imageUrl ;
  return deferred.promise;
}

function scaleImages(images, width){
  return images.map(image=>scaleImage(image, width));
}

function scaleImage(image, width){
  let widthMod = width/image.width;
  let height = Math.round(image.height * widthMod);
  image = Object.assign({}, image, {
    width: width,
    height: height
  });
  return image;
}