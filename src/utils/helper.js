import { date } from 'quasar';

export function getDateFromStamp(value) {
  if (!value) {
    return '';
  }
  let result = (value - 25569 - 1 / 3) * 86400;
  let timeStamp = parseInt(result) + 1;
  return date.formatDate(timeStamp * 1000, 'YYYY-MM-DD');
}

export function getDateTimeFromStamp(value) {
  if (!value) {
    return '';
  }
  let result = (value - 25569 - 1 / 3) * 86400;
  let timeStamp = parseInt(result) + 1;
  return date.formatDate(timeStamp * 1000, 'YYYY-MM-DD HH:mm:ss');
}

export function getPriority(value) {
  if (!value) {
    return '';
  }
  switch (value) {
    case 1:
      return '普通';
    case 2:
      return '低级';
    case 3:
      return '高级';
    default:
      return '普通';
  }
}

export function getFileTypeByClassID(classID) {
  switch (classID) {
    case 1001:
      return 'document';
    case 1002:
      return 'drawing';
    case 1003:
      return 'cappdocument';
    case 1004:
      return '3ddocument';
    case 1006:
      return 'folder';
    case 1012:
      return 'product';
    case 1019:
      return 'part';
    case 3278:
      return 'folderofproduct';
  }
  return '';
}

export function getFileTypeImg(classID) {
  let fileType = getFileTypeByClassID(classID);
  if (fileType === '') {
    return '';
  }
  return require(`@/assets/file-type-images/${fileType}.png`);
}
