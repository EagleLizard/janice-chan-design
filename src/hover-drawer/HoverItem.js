
import { SECTION_ENUM } from './../Sections';

export class HoverItem{
  constructor(key, title, color){
    this.key = key;
    this.title = title || key;
    this.color = color;
  }
}

const HOVER_ITEMS = Object.keys(SECTION_ENUM).reduce((acc,curr, idx, arr)=>{
  let colorTransform = Math.floor((((arr.length-idx)/arr.length)*100)+130);
  acc[curr] = new HoverItem(
    SECTION_ENUM[curr],
    null,
    `rgb(${colorTransform},${colorTransform},${colorTransform})`
  );
  return acc;
}, {});

export function getHoverItem(itemKey){
  return HOVER_ITEMS[itemKey] || null;
}

export const HOME_HOVER_ITEM = getHoverItem(SECTION_ENUM.HOME);