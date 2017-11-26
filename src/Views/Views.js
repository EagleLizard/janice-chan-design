import constEnum from '../constEnum';

export const VIEW_IDS = [
  'MAIN_NAV',
  'DETAIL_PAGE',
  'ABOUT',
  'CONTACT'
];

class PageView {

  constructor(key, path){
    this.key = key;
    this.path = path;
  }

}

export const VIEW_ENUM = constEnum(...VIEW_IDS);

export const DEFAULT_VIEW = VIEW_ENUM.MAIN_NAV;

export const VIEWS = [
  new PageView(
    VIEW_ENUM.MAIN_NAV,
    '/'
  ),
  new PageView(
    VIEW_ENUM.DETAIL_PAGE,
    '/work/:pageId'
  ),
  new PageView(
    VIEW_ENUM.ABOUT,
    '/about'
  ),
  new PageView(
    VIEW_ENUM.CONTACT,
    '/contact'
  )
].reduce((acc,curr)=>{
  acc[curr.key] = curr;
  return acc;
}, {});