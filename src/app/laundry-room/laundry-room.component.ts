import {Component} from '@angular/core';

@Component({
  selector: 'app-laundry-room',
  templateUrl: './laundry-room.component.html',
  styleUrl: './laundry-room.component.css'
})
export class LaundryRoomComponent {
  Force() {
    console.log('ForceUpdate has been clicked');
  }
}
