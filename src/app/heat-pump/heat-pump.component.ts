import {Component} from '@angular/core';

@Component({
  selector: 'app-heat-pump',
  templateUrl: './heat-pump.component.html',
  styleUrl: './heat-pump.component.css'
})
export class HeatPumpComponent {
  isActive: boolean = false;

  toggleDotColor() {
    this.isActive = !this.isActive;
  }

  Force() {
    console.log('ForceUpdate has been clicked');
  }
}
