import {Component} from '@angular/core';

@Component({
  selector: 'app-bathroom',
  templateUrl: './bathroom.component.html',
  styleUrl: './bathroom.component.css'
})
export class BathroomComponent {
  Force() {
    console.log('ForceUpdate has been clicked');
  }
}
