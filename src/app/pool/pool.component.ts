import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {TimeService} from "../services/time.service";
import {LogService} from "../services/log.service";

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrl: './pool.component.css'
})
export class PoolComponent implements OnDestroy {
  isActive: boolean = false;
  name: string = 'Piscine';
  private readonly timeSubscription: Subscription;

  constructor(public timeService: TimeService, private logService: LogService) {
    this.timeSubscription = this.timeService.timeChanges.subscribe(({hours, minutes}) => {
      const newIsActive = !(hours >= 19 || (hours === 0 && minutes < 1));
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
