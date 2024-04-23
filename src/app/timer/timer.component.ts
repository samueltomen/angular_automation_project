import {Component} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  hours: number = 0;
  minutes: number = 0;

  incrementTime(): void {
    this.minutes += 30;
    if (this.minutes >= 60) {
      this.minutes -= 60;
      this.hours += 1;
    }
    if (this.hours > 23) {
      this.hours = 0;
    }
  }
}
