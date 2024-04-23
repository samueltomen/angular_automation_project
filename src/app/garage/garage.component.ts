import {Component} from '@angular/core';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrl: './garage.component.css'
})
export class GarageComponent {
  Force() {
    console.log('ForceUpdate has been clicked');
  }
}
