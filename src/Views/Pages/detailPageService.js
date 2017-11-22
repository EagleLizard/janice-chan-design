import { SECTIONS } from '../../Sections';
import { DETAIL_PAGES, DEFAULT_DETAIL_PAGE } from './DetailPages';
import { GALLERIES, DEFAULT_GALLERY } from './Galleries';

const detailPageService = {
  getSection: getSection,
  getDetailPage: getDetailPage,
  getGallery: getGallery,
  getLightboxFromImages: getLightboxFromImages
};

export default detailPageService;

function getSection(pageId){
  let sectionKey = pageId.replace('-', '_').toUpperCase();
  let sectionIdx = SECTIONS.findIndex((section)=>{
    return section.key === sectionKey
  });
  return SECTIONS[sectionIdx];
}

function getDetailPage(sectionId){
  let detailsIdx = DETAIL_PAGES.findIndex(detailPage=>{
    return detailPage.key === sectionId;
  });
  return (detailsIdx === -1)
          ? DEFAULT_DETAIL_PAGE
          : DETAIL_PAGES[detailsIdx] ;
}

function getGallery(sectionId){
  let galleryIdx = GALLERIES.findIndex(gallery=>{
    return gallery.key === sectionId;
  });
  return (galleryIdx === -1)
          ? DEFAULT_GALLERY
          : GALLERIES[galleryIdx] ;
}

function getLightboxFromImages(images){
  return images.map(image=>{
    return {
      src: image.src,
      id: image.id
    };
  });
}