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
    SECTION_ENUM.RENAISSANCE_NOW,
    'RENAISSANCE NOW',
    'The Taming of the Shrew',
    'scenic designer, properties master',
    [
      'Director: Archelaus D. Crisanto',
      'Assistant Director: Sarah Butler',
      'Costumes: Amanda Louise Hellewell',
      'Photos: Bruce Miller, Janice Chan',
    ],
    2017,
    'Provo, Utah, U.S.A.',
  ),
  new DetailPage(
    SECTION_ENUM.RENAISSANCE_FAIRE,
    'UTAH RENAISSANCE FAIRE',
    '',
    'prop painter',
    [
      
    ],
    '2017, 2018',
    'Lehi, Utah, U.S.A.'
  ),
  new DetailPage(
    SECTION_ENUM.SUNDANCE,
    'SUNDANCE SUMMER THEATRE',
    'Joseph and the Amazing Technicolor Dreamcoat',
    'scenic painter',
    [
      'Director: D. Terry Petrie',
      'Scenic: Stephen Purdy',
      'Lights: Matthew Taylor',
      'Sound: Matthew Kupferer',
      'Costumes: Nancy Cannon, Carla Summers'
    ],
    2017,
    'Sundance, Utah, U.S.A.'
  ),
  new DetailPage(
    SECTION_ENUM.UVU,
    'UTAH VALLEY UNIVERSITY',
    'A Year with Frog & Toad',
    'assistant scenic designer',
    [
      'Director: Lisa Hall Hagen',
      'Scenic: Emma Belnap',
      'Props: Alicia Freeman',
      'Lights: Aaron Gubler',
      'Sound: Kevin Criman',
      'Costumes: Chris Lancaster',
      'Photos: Great Projects Photography',
    ],
    2017,
    'Orem, Utah, U.S.A.'
  ),
  new DetailPage(
    SECTION_ENUM.BYU,
    'BRIGHAM YOUNG UNIVERSITY',
    'Hamlet',
    'scenic designer',
    [
      'Director: Chris Hults',
      'Lights: Kalea Crapo',
      'Sound: Matthew Kupferer',
      'Costumes: Sarah Ziegler'
    ],
    2017,
    'Provo, Utah, U.S.A.'
  ),
  new DetailPage(
    SECTION_ENUM.FAT_PIG,
    'AN OTHER THEATER COMPANY',
    'Fat Pig',
    'scenic designer',
    [
      'Director: Morag Shepherd',
      'Lights: Paige Porter',
      'Sound: Paige Porter',
      'Costumes: Chris Lancaster'
    ],
    2018,
    'Provo, Utah, U.S.A.'
  ),
  new DetailPage(
    SECTION_ENUM.TRIBES,
    'UTAH VALLEY UNIVERSITY',
    'Tribes',
    'scenic designer',
    [
      'Director: Hayley Lambdin',
      'Lights: Aaron Gubler',
      'Sound: Gavin Henry',
      'Costumes: Molly Pack'
    ],
    2018,
    'Orem, Utah, U.S.A.'
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