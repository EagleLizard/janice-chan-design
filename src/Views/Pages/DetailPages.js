/*
  This file contains data for each page.
    In the future this should be lazy-loaded.
*/

import { SECTION_ENUM } from '../../Sections';

class DetailPage{
  constructor(key, title, subtitle, credit, description, year, location){
    this.key = key;
    this.title = title;
    this.subtitle = subtitle;
    this.credit = credit;
    this.description = description;
    this.year = year;
    this.location = location;
  }
}

export const DETAIL_PAGES = [
  new DetailPage(
    SECTION_ENUM.RENAISSANCE_FAIRE,
    'UTAH RENAISSANCE FAIRE',
    '',
    'prop painter',
    [
      'Painted four shields using interior latex/ The shirled were used in the jousting events.'
    ],
    2017,
    'Lehi, UT, U.S.A.'
  ),
  new DetailPage(
    SECTION_ENUM.SUNDANCE,
    'SUNDANCE SUMMER THEATRE',
    'Joseph and the Amazing Technicolor Dreamcoat',
    'scenic painter',
    [],
    2017,
    'Sundance, UT, U.S.A.'
  )
];

export const DEFAULT_DETAIL_PAGE = new DetailPage(
  undefined,
  'VERY IMPORTANT ORGANIZATION',
  'popular well known play',
  'director, master carpenter, chunky monkey',
  [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia quis vel eros donec. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. ',
    'Et ultrices neque ornare aenean euismod elementum. Cras pulvinar mattis nunc sed blandit libero volutpat sed. At erat pellentesque adipiscing commodo. Sed blandit libero volutpat sed cras ornare arcu dui vivamus.'
  ],
  1995,
  'Orem, UT, U.S.A.'
);