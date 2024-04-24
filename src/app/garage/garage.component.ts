import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {TimeService} from "../time.service";
import {LogService} from "../log.service";

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrl: './garage.component.css'
})
export class GarageComponent implements OnDestroy {
  isActive: boolean = false;
  name: string = 'Garage';
  private readonly timeSubscription: Subscription;

  constructor(public timeService: TimeService, private logService: LogService) {
    this.timeSubscription = this.timeService.timeChanges.subscribe(({hours, minutes}) => {
      const newIsActive = (hours >= 7 && hours < 9) || (hours === 9 && minutes === 0);
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
