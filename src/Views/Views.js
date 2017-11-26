import constEnum from '../constEnum';

export const VIEW_IDS = [
  'MAIN_NAV',
  'DETAIL_PAGE'
];

class PageView {

  constructor(){
    
  }

}

export const VIEW_ENUM = constEnum(...VIEW_IDS);

export const DEFAULT_VIEW = VIEW_ENUM.MAIN_NAV;