import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

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
    this._timeChange.next({hours: this._hours, minutes: this._minutes});
  }

  private _minutes: number = 0;

  private _timeChange = new BehaviorSubject<{ hours: number, minutes: number }>({
    hours: this._hours,
    minutes: this._minutes
  });

  get minutes(): number {
    return this._minutes;
  }

  set minutes(value: number) {
    this._minutes = value;
    this._timeChange.next({hours: this._hours, minutes: this._minutes});
  }

  get timeChanges() {
    return this._timeChange.asObservable();
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
    this._timeChange.next({hours: this._hours, minutes: this._minutes});
  }
}
