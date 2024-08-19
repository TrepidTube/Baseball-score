import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopSectionComponent } from '../top-section/top-section.component';
import { CenterSectionComponent } from '../center-section/center-section.component';
import { BottomSectionComponent } from '../bottom-section/bottom-section.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, TopSectionComponent, CenterSectionComponent, BottomSectionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
