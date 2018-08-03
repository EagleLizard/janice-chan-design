
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

const FAT_PIG_GALLERY = [
  imageUri('fatpig/fatpig1.jpg'),
  imageUri('fatpig/fatpig2.jpg'),
  imageUri('fatpig/fatpig3.jpg'),
  imageUri('fatpig/fatpig4.jpg'),
  imageUri('fatpig/fatpig5.jpg'),
  imageUri('fatpig/fatpig6.jpg'),
  imageUri('fatpig/fatpig7.jpg'),
  imageUri('fatpig/fatpig8.jpg'),
  imageUri('fatpig/fatpig9.jpg'),
  imageUri('fatpig/fatpig10.jpg'),
  imageUri('fatpig/fatpig11.jpg'),
  imageUri('fatpig/fatpig12.jpg'),
];

const UVU_GALLERY = [
  imageUri('uvu/uvu1.jpg'),
  imageUri('uvu/uvu2.jpg'),
  imageUri('uvu/uvu3.jpg'),
  imageUri('uvu/uvu4.jpg'),
  imageUri('uvu/uvu5.jpg'),
  imageUri('uvu/uvu6.jpg'),
  imageUri('uvu/uvu7.jpg'),
  imageUri('uvu/uvu8.jpg'),
  imageUri('uvu/uvu9.jpg'),
  imageUri('uvu/uvu10.jpg'),
  imageUri('uvu/uvu11.jpg'),
  imageUri('uvu/uvu12.jpg'),
  imageUri('uvu/uvu13.jpg'),
  imageUri('uvu/uvu14.jpg'),
];

const SUNDANCE_GALLERY = [
  imageUri('sundance/sundance1.jpg'),
  imageUri('sundance/sundance2.jpg'),
  imageUri('sundance/sundance3.jpg'),
  imageUri('sundance/sundance4.jpg'),
  imageUri('sundance/sundance5.jpg'),
  imageUri('sundance/sundance6.jpg'),
  imageUri('sundance/sundance7.jpg'),
  imageUri('sundance/sundance8.jpg'),
  imageUri('sundance/sundance9.jpg'),
  imageUri('sundance/sundance10.jpg'),
  imageUri('sundance/sundance11.jpg'),
];

const RENAISSANCE_NOW_GALLERY = [
  imageUri('renaissancenow/renaissancenow1.jpg'),
  imageUri('renaissancenow/renaissancenow2.jpg'),
  imageUri('renaissancenow/renaissancenow3.jpg'),
  imageUri('renaissancenow/renaissancenow4.jpg'),
  imageUri('renaissancenow/renaissancenow5.jpg'),
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

  TRIBES_GALLERY,
  FAT_PIG_GALLERY,
  UVU_GALLERY,
  SUNDANCE_GALLERY,
  RENAISSANCE_NOW_GALLERY,
};

function imageUri(fileKey){
  return `${BASEPATH}${fileKey}`;
}