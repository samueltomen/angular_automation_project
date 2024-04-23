import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {TimeService} from "../time.service";

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrl: './pool.component.css'
})
export class PoolComponent implements OnDestroy {
  isActive: boolean = false;
  private readonly timeSubscription: Subscription;

  constructor(public timeService: TimeService) {
    this.timeSubscription = this.timeService.timeChanges.subscribe(({hours, minutes}) => {
      this.isActive = !(hours >= 19 || (hours === 0 && minutes < 1));
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
