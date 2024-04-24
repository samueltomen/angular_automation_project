import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {TimeService} from "../time.service";
import {LogService} from "../log.service";

@Component({
  selector: 'app-heat-pump',
  templateUrl: './heat-pump.component.html',
  styleUrl: './heat-pump.component.css'
})
export class HeatPumpComponent implements OnDestroy {
  isActive: boolean = false;
  name: string = 'Pompe à chaleur';
  private readonly timeSubscription: Subscription;

  constructor(public timeService: TimeService, private logService: LogService) {
    this.timeSubscription = this.timeService.timeChanges.subscribe(({hours, minutes}) => {
      const newIsActive = !(hours >= 23 || (hours === 7 && minutes < 30) || hours < 7);
      if (newIsActive != this.isActive) {
        this.logService.addMessage(this.name, hours, minutes, newIsActive);
      }
      this.isActive = newIsActive;
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
