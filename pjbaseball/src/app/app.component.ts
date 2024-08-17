import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Importa los componentes
import { TopSectionComponent } from './top-section/top-section.component';
import { CenterSectionComponent } from './center-section/center-section.component';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopSectionComponent, // Agrega TopSectionComponent
    CenterSectionComponent, // Agrega CenterSectionComponent
    BottomSectionComponent // Agrega BottomSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Nota: cambió de 'styleUrl' a 'styleUrls'
})
export class AppComponent {
  title = 'pjbaseball';
}
