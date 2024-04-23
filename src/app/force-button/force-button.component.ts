import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-force-button',
  templateUrl: './force-button.component.html',
  standalone: true,
  styleUrl: './force-button.component.css'
})
export class ForceButtonComponent {
  @Input() text: string = 'Click me';
  @Input() btnClass: string = 'btn-primary';
  @Output() btnClick = new EventEmitter<void>();

  onClick() {
    this.btnClick.emit();
  }
}
