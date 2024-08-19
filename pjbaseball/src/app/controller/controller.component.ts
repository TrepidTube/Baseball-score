import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controller',
  standalone: true,
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {
  @Input() dataFromTop!: string;
  @Input() dataFromCenter!: string; 
  @Input() dataFromBottom!: string;  
  
  @Output() dataToParent = new EventEmitter<string>();  // EventEmitter para enviar datos al padre
  
  sendData() {
    const data = "Data from ControllerComponent";  // Datos que deseas enviar al padre
    this.dataToParent.emit(data);  // Emite el evento con los datos
  }
}

