import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrl: './dot.component.css'
})
export class DotComponent {
  @Input() name: string = '';
  isActive: boolean = false;

  toggleDotColor() {
    this.isActive = !this.isActive;
  }
}
