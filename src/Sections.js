import constEnum from './constEnum';
import { LeftNavItem } from './left-nav/LeftNavItems';
const Color = require('color');
const PAGE_BASE_URL = '/work/';
const PLACEHOLDER_IMAGE_URL = 'bigbird.jpg';

export class Section {
  constructor(key, title, color, hoverPhotoUrl){
    this.key = key;
    this.title = title;
    if(hoverPhotoUrl){
      this.hoverPhotoUrl = require('./assets-min/lg/'+hoverPhotoUrl);
      console.log(this.hoverPhotoUrl);
    }else{
      this.hoverPhotoUrl = require('./assets-min/lg/'+PLACEHOLDER_IMAGE_URL);
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
  'projects-home.png'
)

export const SECTIONS = [
  new Section(
    SECTION_ENUM.TRIBES,
    'tribes',
    '#D6E0BD',
    'tribes.jpg'
  ),
  new Section(
    SECTION_ENUM.FAT_PIG,
    'fat pig',
    '#D6E0BD',
    'fatpig.jpg'
  ),
  new Section(
    SECTION_ENUM.UVU,
    'a year with frog and toad',
    '#B4CFB7',
    'utahvalleyuniversity.jpg'
  ),
  new Section(
    SECTION_ENUM.SUNDANCE,
    'joseph and the amazing technicolor dreamcoat',
    '#D6E0BD',
    'sundancesummertheatre.jpg'
  ),
  new Section(
    SECTION_ENUM.RENAISSANCE_NOW,
    'the taming of the shrew',
    '#E2C7C3',
    'renaissancenow.jpg'
  ),
  new Section(
    SECTION_ENUM.BYU,
    'hamlet',
    '#DEEAEE',
    'brighamyounguniversity.jpg'
  ),
  new Section(
    SECTION_ENUM.RENAISSANCE_FAIRE,
    'utah renaissance faire',
    '#D3C5C2',
    'utahrenaissancefaire.png'
  ),
  new Section(
    SECTION_ENUM.MISC,
    'miscellaneous',
    '#DFDEDD'
  )
]
//remove MISC section for now
.filter(section=>section.key !== SECTION_ENUM.MISC);

