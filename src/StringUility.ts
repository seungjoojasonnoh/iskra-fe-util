/**
 * 문자열 관련 Utils
 * 모든 return 값은 string type
 */

export const StringUtility = {
  capitalizeFirstLetter(str: string) {
    if (str.length) {
      const newStr = str.toLowerCase();
      return newStr.charAt(0).toUpperCase() + newStr.slice(1);
    }
    return '';
  },
  ellipseSide(str: string, leftLength: number = 8, rightLength: number = 8) {
    if (str.length) {
      const length = str.length;
      const leftValue = str.substring(0, leftLength);
      const rightValue = str.substring(length - rightLength, length);

      return `${leftValue}...${rightValue}`;
    }
    return '';
  },
  ellipseRight(str: string, leftLength: number = 8) {
    if (str.length) {
      return str.substring(0, leftLength) + '...';
    }
    return '';
  },
};
