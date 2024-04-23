import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {TimeService} from "../time.service";

@Component({
  selector: 'app-heat-pump',
  templateUrl: './heat-pump.component.html',
  styleUrl: './heat-pump.component.css'
})
export class HeatPumpComponent implements OnDestroy {
  isActive: boolean = false;
  private readonly timeSubscription: Subscription;

  constructor(public timeService: TimeService) {
    this.timeSubscription = this.timeService.timeChanges.subscribe(({hours, minutes}) => {
      this.isActive = !(hours >= 23 || (hours === 7 && minutes < 30) || hours < 7);
    });
  }

  toggleDotColor() {
    this.isActive = !this.isActive;
  }

  ngOnDestroy() {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }
}
