
import constEnum from '../constEnum';

export const LEFT_NAV_ENUM = constEnum(
  'HOME',
  'AGAMEMNON',
  'SUNDANCE',
  'FAT_PIG',
  'RENAISSANCE_NOW',
  'RENAISSANCE_FAIRE',
  'TRIBES',
  'UVU',
  'BYU',
  'MISC'
);

export class LeftNavItem {
  constructor(title, value){
    this.title = title;
    this.key = value;
  }
}

export const LEFT_NAV_ITEMS = [
  new LeftNavItem('agamemnon', LEFT_NAV_ENUM.AGAMEMNON),
  new LeftNavItem('tribes', LEFT_NAV_ENUM.TRIBES),
  new LeftNavItem('fat pig', LEFT_NAV_ENUM.FAT_PIG),
  new LeftNavItem('a year with frog and toad', LEFT_NAV_ENUM.UVU),
  new LeftNavItem('joseph and the amazing technicolor dreamcoat', LEFT_NAV_ENUM.SUNDANCE),
  new LeftNavItem('the taming of the shrew', LEFT_NAV_ENUM.RENAISSANCE_NOW),
  new LeftNavItem('hamlet', LEFT_NAV_ENUM.BYU),
  new LeftNavItem('utah renaissance faire', LEFT_NAV_ENUM.RENAISSANCE_FAIRE),
  new LeftNavItem('miscellaneous', LEFT_NAV_ENUM.MISC)
];