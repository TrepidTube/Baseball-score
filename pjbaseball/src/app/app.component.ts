import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TopSectionComponent } from './top-section/top-section.component';
import { CenterSectionComponent } from './center-section/center-section.component';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopSectionComponent,
    CenterSectionComponent,
    BottomSectionComponent 
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'pjbaseball';
}
