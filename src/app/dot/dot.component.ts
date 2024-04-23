import {Component, Input, OnDestroy} from '@angular/core';
import {TimeService} from "../time.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrl: './dot.component.css'
})
export class DotComponent implements OnDestroy {

  @Input() name: string = '';
  isActive: boolean = false;
  private timeSubscription: Subscription;

  constructor(public timeService: TimeService) {
    this.timeSubscription = this.timeService.timeChanges.subscribe(({hours}) => {
      this.isActive = hours >= 0 && hours < 1;
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
