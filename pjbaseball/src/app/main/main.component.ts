import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopSectionComponent } from '../top-section/top-section.component';
import { CenterSectionComponent } from '../center-section/center-section.component';
import { BottomSectionComponent } from '../bottom-section/bottom-section.component';
import { style } from '@angular/animations';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, TopSectionComponent, CenterSectionComponent, BottomSectionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  @ViewChild('bottomSection') bottomSection!: BottomSectionComponent;

  playerData: any = {};
  gameData: any = {};
  gameScore: any = {};
  countList: number = 1;

  ngOnInit() {
    window.addEventListener('message', (event) => {
      if (event.origin === window.location.origin) {
        const { type, payload } = event.data;

        if (type === 'playerData') {
          this.playerData = payload;
          console.log('Player data received:', this.playerData);
        } else if (type === 'gameData') {
          this.gameData = payload;
          console.log('Game data received:', this.gameData);
        } else if (type === 'gameScore') {
          this.gameData = payload;
          console.log('Game score received:', this.gameScore);
      }
        
        this.cambiarColorSegunCount(this.gameScore.count);
        }
      });
    }
    cambiarColorSegunCount(count: number) {
      switch (count) {
        case 1:
          this.bottomSection.cambiarColor(0, 'red'); 
          break;
        case 2:
          this.bottomSection.cambiarColor(1, 'red');
          break;
        case 3:
          this.bottomSection.cambiarColor(2, 'green');
          break;
        case 4:
          this.bottomSection.cambiarColor(3, 'red'); 
          break;
        case 5:
          this.bottomSection.cambiarColor(4, 'red');
          break;
        case 6:
          this.bottomSection.cambiarColor(5, 'green');
          break;
          case 7:
            this.bottomSection.cambiarColor(6, 'red'); 
            break;
          case 8:
            this.bottomSection.cambiarColor(7, 'red');
            break;
          case 9:
            this.bottomSection.cambiarColor(8, 'green');
            break;
          case 10:
            this.bottomSection.cambiarColor(9, 'red'); 
            break;
          case 11:
            this.bottomSection.cambiarColor(10, 'red');
            break;
          case 12:
            this.bottomSection.cambiarColor(11, 'green');
            break;
            case 13:
              this.bottomSection.cambiarColor(12, 'red'); 
              break;
            case 14:
              this.bottomSection.cambiarColor(13, 'red');
              break;
            case 15:
              this.bottomSection.cambiarColor(14, 'green');
              break;
            case 16:
              this.bottomSection.cambiarColor(15, 'red'); 
              break;
            case 17:
              this.bottomSection.cambiarColor(16, 'red');
              break;
            case 18:
              this.bottomSection.cambiarColor(17, 'green');
              break;
              case 19:
                this.bottomSection.cambiarColor(18, 'red');
                break;
                case 20:
                  this.bottomSection.cambiarColor(19, 'green');
               break;
        default:
          console.log('Count no válido');
          break;
      }
    }
  }
