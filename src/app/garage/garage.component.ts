import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {TimeService} from "../time.service";

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrl: './garage.component.css'
})
export class GarageComponent implements OnDestroy {
  isActive: boolean = false;
  private readonly timeSubscription: Subscription;

  constructor(public timeService: TimeService) {
    this.timeSubscription = this.timeService.timeChanges.subscribe(({hours, minutes}) => {
      this.isActive = (hours >= 7 && hours < 9) || (hours === 9 && minutes === 0);
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
