
const BASEPATH = 'https://eaglelizard-files.herokuapp.com/';

const LOGO = imageUri('WebsiteLogo-min.png');
const PROJECTS_HOME = imageUri('projects-home.png');
const JANU = imageUri('janu.jpg');

const RENAISSANCE_FAIRE = imageUri('utahrenaissancefaire.png');
const BYU = imageUri('brighamyounguniversity.jpg');
const SUNDANCE = imageUri('sundancesummertheatre.jpg');
const RENAISSANCE_NOW = imageUri('renaissancenow.jpg');
const UVU = imageUri('utahvalleyuniversity.jpg');
const FAT_PIG = imageUri('fatpig.jpg');
const TRIBES = imageUri('tribes.jpg');
const PLACEHOLDER = imageUri('bigbird.jpg');

const TRIBES_GALLERY = [
  imageUri('tribes/tribes1.jpg'),
  imageUri('tribes/tribes2.jpg'),
  imageUri('tribes/tribes3.jpg'),
  imageUri('tribes/tribes4.jpg'),
  imageUri('tribes/tribes5.jpg'),
  imageUri('tribes/tribes6.jpg'),
  imageUri('tribes/tribes7.jpg'),
  imageUri('tribes/tribes8.jpg'),
  imageUri('tribes/tribes9.jpg'),
  imageUri('tribes/tribes10.jpg'),
  imageUri('tribes/tribes11.jpg'),
  imageUri('tribes/tribes12.jpg'),
  imageUri('tribes/tribes13.jpg'),
  imageUri('tribes/tribes14.jpg')
];

export default {
  LOGO,
  PROJECTS_HOME,
  JANU,

  RENAISSANCE_FAIRE,
  BYU,
  SUNDANCE,
  RENAISSANCE_NOW,
  UVU,
  FAT_PIG,
  TRIBES,
  PLACEHOLDER,

  TRIBES_GALLERY
};

function imageUri(fileKey){
  return `${BASEPATH}${fileKey}`;
}