import {Component} from '@angular/core';

@Component({
  selector: 'app-bathroom',
  templateUrl: './bathroom.component.html',
  styleUrl: './bathroom.component.css'
})
export class BathroomComponent {
  isActive: boolean = false;

  toggleDotColor() {
    this.isActive = !this.isActive;
  }

  Force() {
    console.log('ForceUpdate has been clicked');
  }
}
