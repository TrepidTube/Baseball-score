import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule, Router } from '@angular/router';

import { TopSectionComponent } from './top-section/top-section.component';
import { CenterSectionComponent } from './center-section/center-section.component';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';
import { ControllerComponent } from "./controller/controller.component";

@Component({
  selector: 'app-root',
  standalone: true, // Declara que es un componente standalone
  imports: [RouterModule, TopSectionComponent, CenterSectionComponent, BottomSectionComponent, ControllerComponent],
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pjbaseball';

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    // Detectar Ctrl + Barra Espaciadora
    if (event.ctrlKey && event.code === 'Space') {
      event.preventDefault(); 
      this.openNewWindow(); 
    }
  }

  // Función para abrir una nueva ventana
  openNewWindow() {
    const url = '/controller';
    const windowName = '_blank';
    const windowFeatures = 'width=800,height=600'; // Establece el tamaño de la ventana
    console.log('Opening new window with URL:', url);

    window.open(url, windowName, windowFeatures);
  }
}

