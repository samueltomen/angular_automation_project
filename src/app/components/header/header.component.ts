import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  realHours: number = 0;
  realMinutes: number = 0;
  realSecondes: number = 0;

  constructor() {
    const date = new Date();
    this.realHours = date.getHours();
    this.realMinutes = date.getMinutes();
    this.realSecondes = date.getSeconds();

    setInterval(() => {
      this.realTime();
    }, 1000);
  }

  realTime(): void {
    this.realSecondes += 1;
    if (this.realSecondes >= 60) {
      this.realSecondes = 0;
      this.realMinutes += 1;
    }
    if (this.realMinutes >= 60) {
      this.realMinutes -= 60;
      this.realHours += 1;
    }
    if (this.realHours > 23) {
      this.realHours = 0;
    }
  }
}
