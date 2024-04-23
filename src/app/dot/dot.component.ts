import {Component, Input} from '@angular/core';
import {TimeService} from "../time.service";

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrl: './dot.component.css'
})
export class DotComponent {

  @Input() name: string = '';
  isActive: boolean = false;

  constructor(public timeService: TimeService) {
    // setInterval(() => {
    //   this.toggleDotColorBetweenMidnightAndOne();
    // }, 0);
  }

  toggleDotColor() {
    this.isActive = !this.isActive;
  }

  toggleDotColorBetweenMidnightAndOne() {
    this.isActive = this.timeService.hours >= 0 && this.timeService.hours < 1;
  }
}
