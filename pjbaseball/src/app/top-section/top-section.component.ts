import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-section',
  standalone: true, 
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.css']
})
export class TopSectionComponent {
  @Input() pitcherName: string = 'Wilmer Rios';
  @Input() pitchSpeed: number = 0;
  @Input() totalPitches: number = 0;
  @Input() strikes: number = 0;
  @Input() balls: number = 0;

  receivedData: string = '';


  onDataReceived(data: string) {
    // Aquí puedes manejar los datos recibidos como desees
  }

  
}

