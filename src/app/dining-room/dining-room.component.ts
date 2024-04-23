import {Component} from '@angular/core';

@Component({
  selector: 'app-dining-room',
  templateUrl: './dining-room.component.html',
  styleUrl: './dining-room.component.css'
})
export class DiningRoomComponent {
  isActive: boolean = false;

  toggleDotColor() {
    this.isActive = !this.isActive;
  }

  Force() {
    console.log('ForceUpdate has been clicked');
  }
}
