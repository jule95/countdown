import { ILocalStorageCountdown } from '../common/interfaces/localStorage.interfaces.ts';
import { ELocalStorageKeys } from '../common/enums/localStorage.enums.ts';

class LocalStorageHelper {
  static setCountdown(value: ILocalStorageCountdown) {
    localStorage.setItem(ELocalStorageKeys.COUNTDOWN, JSON.stringify(value));
  }

  static getCountdown(): ILocalStorageCountdown | null{
    if (!localStorage.getItem(ELocalStorageKeys.COUNTDOWN)) {
      return null;
    }

    return JSON.parse(ELocalStorageKeys.COUNTDOWN);
  }
}

export default LocalStorageHelper;
