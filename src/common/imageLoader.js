import Q from 'q';

export default {
  loadImages: loadImages
};

class ImageData {
  constructor(img){
    this.el = img;
    this.width = img.width;
    this.height = img.height;
  }
}

function loadImages(images){
  return Q.all(images.map(image=>loadImage(image)));
}

function loadImage(imageUrl){
  let deferred = Q.defer();
  let image = new Image();
  image.onload = function(){
    console.log(this);
    deferred.resolve(new ImageData(this));
  }
  image.onerror = function(){
    deferred.reject(this);
  }
  image.src = imageUrl;
  return deferred.promise;
}