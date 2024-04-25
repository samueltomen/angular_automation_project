import {Component} from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent {
  newInstruction: string = '';
  instructions: string[] = [];

  addInstruction(): void {
    if (this.newInstruction) {
      this.instructions.push(this.newInstruction);
      this.newInstruction = ''; 
    }
  }
}
