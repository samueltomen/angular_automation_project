import {Component} from '@angular/core';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrl: './pool.component.css'
})
export class PoolComponent {
  Force() {
    console.log('ForceUpdate has been clicked');
  }
}