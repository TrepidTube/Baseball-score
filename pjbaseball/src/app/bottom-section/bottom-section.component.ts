import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bottom-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bottom-section.component.html',
  styleUrls: ['./bottom-section.component.css']
})
export class BottomSectionComponent {
  @Input() innings: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  @Input() teams: any[] = [
    {
      name: 'Yucatan',
      scores: [0, 0, 0, 2, 0, 0, '', '', ''],
      c: 2,
      h: 4,
      e: 1,
      balls: 1,
      strikes: 1,
      outs: 2
    },
    {
      name: 'Monclova',
      scores: [0, 2, 0, 3, 0, '', '', '', ''],
      c: 5,
      h: 9,
      e: 0,
      balls: 1,
      strikes: 1,
      outs: 2
    }
  ];
  receivedData: string = '';

  onDataReceived(data: string) {
    // Aquí puedes manejar los datos recibidos como desees
  }
}
