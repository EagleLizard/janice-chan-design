import imageUris from './image-uris';
import { SECTION_IDS, SECTION_ENUM } from './section-enum';
import { DETAIL_PAGES, DEFAULT_DETAIL_PAGE } from './Views/Pages/DetailPages';
import { GALLERIES, DEFAULT_GALLERY } from './Views/Pages/Galleries';

const PAGE_BASE_URL = '/work/';

export class Section {
  constructor(key, title, hoverPhotoUrl){
    this.key = key;
    this.title = title;
    this.detailPage = getDetailPage(this.key);
    this.imageGallery = getGallery(this.key);
    
    if(hoverPhotoUrl){
      this.hoverPhotoUrl = hoverPhotoUrl;
    }else{
      this.hoverPhotoUrl = imageUris.PLACEHOLDER;
    }
    
    this.pageUrl = PAGE_BASE_URL+PAGE_URLS[key];
  }
}

const PAGE_URLS = SECTION_IDS.reduce((acc,curr)=>{
  acc[curr] = curr.toLowerCase().replace('_', '-');
  return acc;
}, {})

export const PROJECTS_HOME = new Section(
  SECTION_ENUM.HOME,
  null,
  imageUris.PROJECTS_HOME
)

export const SECTIONS = [,
  new Section(
    SECTION_ENUM.CABARET,
    'cabaret',
    imageUris.CABARET
  ),
  new Section(
    SECTION_ENUM.NEXT_FALL,
    'next fall',
    imageUris.NEXT_FALL
  ),
  new Section(
    SECTION_ENUM.AGAMEMNON,
    'agamemnon',
    imageUris.AGAMEMNON
  ),
  new Section(
    SECTION_ENUM.TRIBES,
    'tribes',
    imageUris.TRIBES
  ),
  new Section(
    SECTION_ENUM.FAT_PIG,
    'fat pig',
    imageUris.FAT_PIG
  ),
  new Section(
    SECTION_ENUM.UVU,
    'a year with frog and toad',
    imageUris.UVU
  ),
  new Section(
    SECTION_ENUM.SUNDANCE,
    'joseph and the amazing technicolor dreamcoat',
    imageUris.SUNDANCE
  ),
  new Section(
    SECTION_ENUM.RENAISSANCE_NOW,
    'the taming of the shrew',
    imageUris.RENAISSANCE_NOW
  ),
  new Section(
    SECTION_ENUM.BYU,
    'hamlet',
    imageUris.BYU
  ),
  new Section(
    SECTION_ENUM.RENAISSANCE_FAIRE,
    'utah renaissance faire',
    imageUris.RENAISSANCE_FAIRE
  ),
  new Section(
    SECTION_ENUM.MISC,
    'miscellaneous',
  )
]
//remove MISC section for now
.filter(section=>section.key !== SECTION_ENUM.MISC);

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