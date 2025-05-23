import { ILocalStorageCountdown } from '../common/interfaces/ls.interfaces.ts';
import { ELocalStorageKeys } from '../common/enums/ls.enums.ts';

class LocalStorageHelper {
  static setCountdown(value: ILocalStorageCountdown) {
    localStorage.setItem(ELocalStorageKeys.COUNTDOWN, JSON.stringify(value));
  }

  static getCountdown(): ILocalStorageCountdown | null{
    if (!localStorage.getItem(ELocalStorageKeys.COUNTDOWN)) {
      return null;
    }

    return JSON.parse(localStorage.getItem(ELocalStorageKeys.COUNTDOWN)!);
  }
}

export default LocalStorageHelper;
