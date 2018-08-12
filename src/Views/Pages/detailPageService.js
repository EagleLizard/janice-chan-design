import { SECTIONS } from '../../Sections';

const detailPageService = {
  getSection,
  getLightboxFromImages
};

export default detailPageService;

function getSection(pageId){
  let sectionKey = pageId.replace('-', '_').toUpperCase();
  let sectionIdx = SECTIONS.findIndex((section)=>{
    return section.key === sectionKey
  });
  return SECTIONS[sectionIdx];
}

function getLightboxFromImages(images){
  return images.map(image=>{
    return {
      src: image.src,
      id: image.id
    };
  });
}
