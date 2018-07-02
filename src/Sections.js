import constEnum from './constEnum';
import imageUris from './image-uris';
const Color = require('color');
const PAGE_BASE_URL = '/work/';

export class Section {
  constructor(key, title, color, hoverPhotoUrl){
    this.key = key;
    this.title = title;
    if(hoverPhotoUrl){
      this.hoverPhotoUrl = hoverPhotoUrl;
      console.log(this.hoverPhotoUrl);
    }else{
      this.hoverPhotoUrl = imageUris.PLACEHOLDER;
    }
    this.navColor = Color(color).darken(0.1).hex();
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
  'MISC'
];

export const SECTION_ENUM = constEnum(...SECTION_IDS);

const PAGE_URLS = SECTION_IDS.reduce((acc,curr)=>{
  acc[curr] = curr.toLowerCase().replace('_', '-');
  return acc;
}, {})

export const PROJECTS_HOME = new Section(
  SECTION_ENUM.HOME,
  null,
  null,
  imageUris.PROJECTS_HOME
)

export const SECTIONS = [
  new Section(
    SECTION_ENUM.TRIBES,
    'tribes',
    '#D6E0BD',
    imageUris.TRIBES
  ),
  new Section(
    SECTION_ENUM.FAT_PIG,
    'fat pig',
    '#D6E0BD',
    imageUris.FAT_PIG
  ),
  new Section(
    SECTION_ENUM.UVU,
    'a year with frog and toad',
    '#B4CFB7',
    imageUris.UVU
  ),
  new Section(
    SECTION_ENUM.SUNDANCE,
    'joseph and the amazing technicolor dreamcoat',
    '#D6E0BD',
    imageUris.SUNDANCE
  ),
  new Section(
    SECTION_ENUM.RENAISSANCE_NOW,
    'the taming of the shrew',
    '#E2C7C3',
    imageUris.RENAISSANCE_NOW
  ),
  new Section(
    SECTION_ENUM.BYU,
    'hamlet',
    '#DEEAEE',
    imageUris.BYU
  ),
  new Section(
    SECTION_ENUM.RENAISSANCE_FAIRE,
    'utah renaissance faire',
    '#D3C5C2',
    imageUris.RENAISSANCE_FAIRE
  ),
  new Section(
    SECTION_ENUM.MISC,
    'miscellaneous',
    '#DFDEDD'
  )
]
//remove MISC section for now
.filter(section=>section.key !== SECTION_ENUM.MISC);

