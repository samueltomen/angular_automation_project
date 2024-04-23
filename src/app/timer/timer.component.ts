import {Component} from '@angular/core';
import {TimeService} from "../time.service";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {

  constructor(public timeService: TimeService) {
  }

  incrementTime(): void {
    this.timeService.incrementTime();
  }
}
