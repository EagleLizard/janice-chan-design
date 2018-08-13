import constEnum from '../constEnum';

export const VIEW_IDS = [
  'MAIN_NAV',
  'DETAIL_PAGE',
  'ABOUT'
];

class PageView {

  constructor(key, path, title){
    this.key = key;
    this.path = path;
    this.title = title;
  }

}

export const VIEW_ENUM = constEnum(...VIEW_IDS);

export const DEFAULT_VIEW = VIEW_ENUM.MAIN_NAV;

export const VIEWS = [
  new PageView(
    VIEW_ENUM.MAIN_NAV,
    '/',
    'projects'
  ),
  new PageView(
    VIEW_ENUM.DETAIL_PAGE,
    '/projects/:pageId',
    'work'
  ),
  new PageView(
    VIEW_ENUM.ABOUT,
    '/about',
    'about'
  )
].reduce((acc,curr)=>{
  acc[curr.key] = curr;
  return acc;
}, {});

