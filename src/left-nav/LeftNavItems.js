
import constEnum from '../constEnum';

export const LEFT_NAV_ENUM = constEnum(
  'SUNDANCE',
  'RENAISSANCE_NOW',
  'RENAISSANCE_FAIRE',
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
  new LeftNavItem('sundance', LEFT_NAV_ENUM.SUNDANCE),
  new LeftNavItem('renaissance now', LEFT_NAV_ENUM.RENAISSANCE_NOW),
  new LeftNavItem('utah renaissance faire', LEFT_NAV_ENUM.RENAISSANCE_FAIRE),
  new LeftNavItem('utah valley university', LEFT_NAV_ENUM.UVU),
  new LeftNavItem('byu theatre and media', LEFT_NAV_ENUM.BYU),
  new LeftNavItem('miscellaneous', LEFT_NAV_ENUM.MISC)
];