import constEnum from './constEnum';
import imageUris from './image-uris';
const Color = require('color');
const PAGE_BASE_URL = '/work/';

export class Section {
  constructor(key, title, hoverPhotoUrl){
    this.key = key;
    this.title = title;
    
    if(hoverPhotoUrl){
      this.hoverPhotoUrl = hoverPhotoUrl;
    }else{
      this.hoverPhotoUrl = imageUris.PLACEHOLDER;
    }
    
    this.pageUrl = PAGE_BASE_URL+PAGE_URLS[key];
  }
}

export const SECTION_IDS = [
  'HOME',
  'SUNDANCE',
  'FAT_PIG',
  'RENAISSANCE_NOW',
  'RENAISSANCE_FAIRE',
  'TRIBES',
  'UVU',
  'BYU',
  'MISC',
  'AGAMEMNON',
  'NEXT_FALL',
  'CABARET',
];

export const SECTION_ENUM = constEnum(...SECTION_IDS);

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

