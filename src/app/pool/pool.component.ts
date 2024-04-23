import {Component} from '@angular/core';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrl: './pool.component.css'
})
export class PoolComponent {
  isActive: boolean = false;

  toggleDotColor() {
    this.isActive = !this.isActive;
  }

  Force() {
    console.log('ForceUpdate has been clicked');
  }
}
