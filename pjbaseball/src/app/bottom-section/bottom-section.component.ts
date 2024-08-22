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

  @ViewChild('C1A', { static: false }) C1A!: ElementRef;
  @ViewChild('C2A', { static: false }) C2A!: ElementRef;
  @ViewChild('C3A', { static: false }) C3A!: ElementRef;
  @ViewChild('C4A', { static: false }) C4A!: ElementRef;
  @ViewChild('C5A', { static: false }) C5A!: ElementRef;
  @ViewChild('C6A', { static: false }) C6A!: ElementRef;
  @ViewChild('C7A', { static: false }) C7A!: ElementRef;
  @ViewChild('C8A', { static: false }) C8A!: ElementRef;
  @ViewChild('C9A', { static: false }) C9A!: ElementRef;
  @ViewChild('C10A', { static: false }) C10A!: ElementRef;

  @ViewChild('C1B', { static: false }) C1B!: ElementRef;
  @ViewChild('C2B', { static: false }) C2B!: ElementRef;
  @ViewChild('C3B', { static: false }) C3B!: ElementRef;
  @ViewChild('C4B', { static: false }) C4B!: ElementRef;
  @ViewChild('C5B', { static: false }) C5B!: ElementRef;
  @ViewChild('C6B', { static: false }) C6B!: ElementRef;
  @ViewChild('C7B', { static: false }) C7B!: ElementRef;
  @ViewChild('C8B', { static: false }) C8B!: ElementRef;
  @ViewChild('C9B', { static: false }) C9B!: ElementRef;
  @ViewChild('C10B', { static: false }) C10B!: ElementRef;

  private elementos: ElementRef[] = [];

  ngAfterViewInit() {
    this.elementos = [
      this.C1A, this.C1B, this.C2A, this.C2B, this.C3A, this.C3B,
      this.C4A, this.C4B, this.C5A, this.C5B, this.C6A, this.C6B,
      this.C7A, this.C7B, this.C8A, this.C8B, this.C9A, this.C9B,
      this.C10A, this.C10B
    ];

    // Verificar que todos los elementos han sido capturados correctamente
    this.elementos.forEach((el, index) => {
      if (el) {
        console.log(`Elemento ${index + 1} capturado:`, el.nativeElement);
      } else {
        console.error(`Elemento ${index + 1} no capturado`);
      }
    });
  }

  cambiarColor(ind: number, color: string) {
    const elemento = this.elementos[ind];
    if (elemento) {
      console.log('Número', ind, 'pintado');
      elemento.nativeElement.style.color = color;
    } else {
      console.error('Elemento no encontrado para el índice:', ind);
    }
  }
}
 

