import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-set-time',
  templateUrl: './set-time.component.html',
  styleUrl: './set-time.component.css'
})
export class SetTimeComponent {
  @Input() name: string;
  startTime: string = '00:00';
  endTime: string = '00:30';

  adjustTime(field: 'startTime' | 'endTime', change: number) {
    let time = this[field];
    let [hours, minutes] = time.split(':').map(Number);

    minutes += change;
    while (minutes >= 60) {
      minutes -= 60;
      hours++;
    }
    while (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours >= 24) {
      hours = 0; // Reset to zero if it exceeds 23
    } else if (hours < 0) {
      hours = 23; // Set to 23 if it goes below zero
    }

    this[field] = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }

  setTime() {
    console.log(`Setting time for ${this.name} - Start: ${this.startTime}, End: ${this.endTime}`);
  }
}
