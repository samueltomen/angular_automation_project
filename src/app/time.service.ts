import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  constructor() {
  }

  private _hours: number = 0;

  get hours(): number {
    return this._hours;
  }

  set hours(value: number) {
    this._hours = value;
  }

  private _minutes: number = 0;

  get minutes(): number {
    return this._minutes;
  }

  set minutes(value: number) {
    this._minutes = value;
  }

  incrementTime(): void {
    this._minutes += 30;
    if (this._minutes >= 60) {
      this._minutes -= 60;
      this._hours += 1;
    }
    if (this._hours > 23) {
      this._hours = 0;
    }
  }
}
