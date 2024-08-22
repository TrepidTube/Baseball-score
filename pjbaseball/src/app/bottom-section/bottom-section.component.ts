import { Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bottom-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bottom-section.component.html',
  styleUrls: ['./bottom-section.component.css']
})
export class BottomSectionComponent {
  @Input() name1: string = 'Team 1';
  @Input() c11: number = 0;
  @Input() c21: number = 0;
  @Input() c31: number = 0;
  @Input() c41: number = 0;
  @Input() c51: number = 0;
  @Input() c61: number = 0;
  @Input() c71: number = 0;
  @Input() c81: number = 0;
  @Input() c91: number = 0;
  @Input() c101: number = 0;
  @Input() ca1: number = 0;
  @Input() h1: number = 0;
  @Input() e1: number = 0;
  @Input() balls1: number = 0;
  @Input() strikes1: number = 0;
  @Input() outs1: number = 0;

  @Input() name2: string = 'Team 2';
  @Input() c12: number = 0;
  @Input() c22: number = 0;
  @Input() c32: number = 0;
  @Input() c42: number = 0;
  @Input() c52: number = 0;
  @Input() c62: number = 0;
  @Input() c72: number = 0;
  @Input() c82: number = 0;
  @Input() c92: number = 0;
  @Input() c102: number = 0;
  @Input() ca2: number = 0;
  @Input() h2: number = 0;
  @Input() e2: number = 0;
  @Input() balls2: number = 0;
  @Input() strikes2: number = 0;
  @Input() outs2: number = 0;

  @ViewChildren('C11, C12, C13, C14, C15, C16, C17, C18, C19, C110, C21, C22, C23, C24, C25, C26, C27, C28, C29, C210') elementos!: QueryList<ElementRef>;

  cambiarColor(ind: number, color: string) {
    const elemento = this.elementos.toArray()[ind];
    if (elemento) {
      elemento.nativeElement.style.color = color;
    }
  }
  
}
