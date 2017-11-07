import Q from 'q';

export default {
  loadImage: loadImage,
  loadImages: loadImages,
  scaleImages: scaleImages
};

class ImageData {
  constructor(img){
    this.width = img.width;
    this.height = img.height;
    this.src = '';
  }
  setSource(src){
    this.src = src;
    return this;
  }
}

function loadImages(images){
  return Q.all(images.map(image=>loadImage(image)));
}

function loadImage(imageUrl){
  let deferred = Q.defer();
  let image = new Image();
  image.onload = function(){
    deferred.resolve(new ImageData(this));
  }
  image.onerror = function(){
    deferred.reject(this);
  }
  image.src = imageUrl;
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