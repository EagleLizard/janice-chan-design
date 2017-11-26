
import constEnum from 'src/constEnum';

const CONTACT_TYPES = [
  'NAME',
  'EMAIL',
  'MESSAGE'
];

export const CONTACT_ENUM = constEnum(CONTACT_TYPES);

class ContactInfo{
  constructor(key, name, value){
    this.key = key;
    this.name = name;
    this.value = value;
  }
}

export const CONTACT_INFO = [
  new ContactInfo(
    CONTACT_ENUM.NAME,
    'Name',
    'Janice Chan'
  ),
  new ContactInfo(
    CONTACT_ENUM.EMAIL,
    'Email',
    'contact@janicechan.design'
  )
];