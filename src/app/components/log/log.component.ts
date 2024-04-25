import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {LogService} from "../../services/log.service";

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent implements OnInit, OnDestroy {
  messages: string[] = [];
  private messageSubscription: Subscription;

  constructor(private logService: LogService) {
  }

  ngOnInit() {
    this.messageSubscription = this.logService.currentMessages.subscribe(messages => {
      this.messages = messages;
    });
  }

  ngOnDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }

}
