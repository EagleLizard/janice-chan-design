import constEnum from './constEnum';
import { LeftNavItem } from './left-nav/LeftNavItems';
const Color = require('color');

export class Section {
  constructor(key, title, color, hoverPhotoUrl){
    this.key = key;
    this.title = title;
    if(hoverPhotoUrl){
      this.hoverPhotoUrl = require('./assets/'+hoverPhotoUrl);
      console.log(this.hoverPhotoUrl);
    }else{
      this.color = color;
    }
    this.navColor = Color(color).darken(0.1).hex();
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

export const SECTIONS = [
  new Section(
    SECTION_ENUM.SUNDANCE,
    'sundance summer theatre',
    '#D6E0BD'
  ),
  new Section(
    SECTION_ENUM.RENAISSANCE_NOW,
    'renaissance now',
    '#E2C7C3'
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
    '#B4CFB7'
  ),
  new Section(
    SECTION_ENUM.BYU,
    'brigham young university',
    '#DEEAEE'
  ),
  new Section(
    SECTION_ENUM.MISC,
    'miscellaneous',
    '#DFDEDD'
  )
];