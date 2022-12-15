import Big, { BigSource, RoundingMode } from 'big.js';
import { ERROR_MESSAGE } from './Constants';

const MILLION = new Big(1000000);
const BILLION = new Big(1000000000);
const TRILLION = new Big(1000000000000);
const RANGE_LIMIT = new Big(999999999999999999999.9999999999999999999999999);
const NumberRegex = new RegExp(/^[+-]?\d*(\.?\d*)$/);

/**
 * 숫자 관련 Utils
 * 모든 return 값은 string type
 */

export const NumberUtility = {
  raw(value: string) {
    return value.replace(/[^-\d.]/g, '');
  },
  format(value: BigSource): string {
    try {
      const biggedValue = new Big(value);

      if (biggedValue.gt(RANGE_LIMIT)) {
        return ERROR_MESSAGE.NUMBER_UTILITY.EXCEEDS_RANGE;
      }

      if (biggedValue.gt(new Big(0)) && biggedValue.lt(new Big(0.000001))) {
        return biggedValue.round(6, 1).toString();
      } else {
        return format(biggedValue);
      }
    } catch (err) {
      console.log(err);
      return ERROR_MESSAGE.NUMBER_UTILITY.INVALID;
    }
  },
  roundFormat(
    value: BigSource,
    round: RoundingMode = 1,
    decimalPlace: number = 6,
  ): string {
    try {
      const biggedValue = new Big(value).round(decimalPlace, round);

      if (biggedValue.gt(RANGE_LIMIT)) {
        return ERROR_MESSAGE.NUMBER_UTILITY.EXCEEDS_RANGE;
      }

      if (biggedValue.gt(new Big(0)) && biggedValue.lt(new Big(0.000001))) {
        return biggedValue.round(decimalPlace, round).toString();
      } else {
        return format(biggedValue);
      }
    } catch (err) {
      console.log(err);
      return ERROR_MESSAGE.NUMBER_UTILITY.INVALID;
    }
  },
};

function isWithinRange(biggedValue: Big) {
  return biggedValue.gt(RANGE_LIMIT);
}

function format(biggedValue: Big) {
  return biggedValue.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}
