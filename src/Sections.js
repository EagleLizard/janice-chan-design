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
  'SUNDANCE',
  'RENAISSANCE_NOW',
  'RENAISSANCE_FAIRE',
  'UVU',
  'BYU',
  'MISC'
];

export const SECTION_ENUM = constEnum(...SECTION_IDS);

const PAGE_URLS = SECTION_IDS.reduce((acc,curr)=>{
  acc[curr] = curr.toLowerCase().replace('_', '-');
  return acc;
}, {})

export const SECTIONS = [
  new Section(
    SECTION_ENUM.SUNDANCE,
    'sundance summer theatre',
    '#D6E0BD',
    'sundancesummertheatre.jpg'
  ),
  new Section(
    SECTION_ENUM.RENAISSANCE_NOW,
    'renaissance now',
    '#E2C7C3',
    'renaissancenow.jpg'
  ),
  new Section(
    SECTION_ENUM.RENAISSANCE_FAIRE,
    'utah renaissance faire',
    '#D3C5C2',
    'utahrenaissancefaire.png'
  ),
  new Section(
    SECTION_ENUM.UVU,
    'utah valley university',
    '#B4CFB7',
    'utahvalleyuniversity.png'
  ),
  new Section(
    SECTION_ENUM.BYU,
    'brigham young university',
    '#DEEAEE',
    'brighamyounguniversity.jpg'
  ),
  new Section(
    SECTION_ENUM.MISC,
    'miscellaneous',
    '#DFDEDD'
  )
];