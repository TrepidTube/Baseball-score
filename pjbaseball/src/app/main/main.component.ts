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
  @ViewChild(BottomSectionComponent, {static: false}) bottomSection!: BottomSectionComponent;

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
          this.gameScore = payload;
          console.log('Game score received:', this.gameScore);
      }
        
        this.MainCounter(this.gameScore.count, this.gameScore.gRuns, this.gameScore.Tm1, this.gameScore.Tm2);
        }
      });
    }

    points: Array<number> = [];
    MainCounter(count: number, gRuns: number, Tm1: number, Tm2: number) {
      switch (this.gameScore.count) {
        case 1:
          this.bottomSection.cambiarColor(19, 'white');
          this.bottomSection.cambiarColor(0, 'red');
          this.bottomSection.cambiarColor(1, 'white');
          this.points[0] = this.gameScore.gRuns;
          break;
        case 2:
          this.bottomSection.cambiarColor(1, 'red');
          this.bottomSection.cambiarColor(0, 'white');
          this.bottomSection.cambiarColor(2, 'white');
          this.points[1] = this.gameScore.gRuns;
          break;
        case 3:
          this.bottomSection.cambiarColor(2, 'red');
          this.bottomSection.cambiarColor(1, 'white');
          this.bottomSection.cambiarColor(3, 'white');
          this.points[2] = this.gameScore.gRuns;
          break;
        case 4:
          this.bottomSection.cambiarColor(3, 'red'); 
          this.bottomSection.cambiarColor(2, 'white');
          this.bottomSection.cambiarColor(4, 'white');
          this.points[3] = this.gameScore.gRuns;
          break;
        case 5:
          this.bottomSection.cambiarColor(4, 'red');
          this.bottomSection.cambiarColor(3, 'white');
          this.bottomSection.cambiarColor(5, 'white');
          this.points[4] = this.gameScore.gRuns;
          break;
        case 6:
          this.bottomSection.cambiarColor(5, 'red');
          this.bottomSection.cambiarColor(4, 'white');
          this.bottomSection.cambiarColor(6, 'white');
          this.points[5] = this.gameScore.gRuns;
          break;
        case 7:
            this.bottomSection.cambiarColor(6, 'red'); 
            this.bottomSection.cambiarColor(5, 'white');
            this.bottomSection.cambiarColor(7, 'white');
            this.points[6] = this.gameScore.gRuns;
            break;
          case 8:
            this.bottomSection.cambiarColor(7, 'red');
            this.bottomSection.cambiarColor(6, 'white');
            this.bottomSection.cambiarColor(8, 'white');
            this.points[7] = this.gameScore.gRuns;
            break;
          case 9:
            this.bottomSection.cambiarColor(8, 'red');
            this.bottomSection.cambiarColor(7, 'white');
            this.bottomSection.cambiarColor(9, 'white');
            this.points[8] = this.gameScore.gRuns;
            break;
          case 10:
            this.bottomSection.cambiarColor(9, 'red'); 
            this.bottomSection.cambiarColor(8, 'white');
            this.bottomSection.cambiarColor(10, 'white');
            this.points[9] = this.gameScore.gRuns;
            break;
          case 11:
            this.bottomSection.cambiarColor(10, 'red');
            this.bottomSection.cambiarColor(9, 'white');
            this.bottomSection.cambiarColor(11, 'white');
            this.points[10] = this.gameScore.gRuns;
            break;
          case 12:
            this.bottomSection.cambiarColor(11, 'red');
            this.bottomSection.cambiarColor(10, 'white');
            this.bottomSection.cambiarColor(12, 'white');
            this.points[11] = this.gameScore.gRuns;
            break;
            case 13:
              this.bottomSection.cambiarColor(12, 'red'); 
              this.bottomSection.cambiarColor(11, 'white');
              this.bottomSection.cambiarColor(13, 'white');
              this.points[12] = this.gameScore.gRuns;
              break;
            case 14:
              this.bottomSection.cambiarColor(13, 'red');
              this.bottomSection.cambiarColor(12, 'white');
              this.bottomSection.cambiarColor(14, 'white');
              this.points[13] = this.gameScore.gRuns;
              break;
            case 15:
              this.bottomSection.cambiarColor(14, 'red');
              this.bottomSection.cambiarColor(13, 'white');
              this.bottomSection.cambiarColor(15, 'white');
              this.points[14] = this.gameScore.gRuns;
              break;
            case 16:
              this.bottomSection.cambiarColor(15, 'red'); 
              this.bottomSection.cambiarColor(14, 'white');
              this.bottomSection.cambiarColor(16, 'white');
              this.points[15] = this.gameScore.gRuns;
              break;
            case 17:
              this.bottomSection.cambiarColor(16, 'red');
              this.bottomSection.cambiarColor(15, 'white');
              this.bottomSection.cambiarColor(17, 'white');
              this.points[16] = this.gameScore.gRuns;
              break;
            case 18:
              this.bottomSection.cambiarColor(17, 'red');
              this.bottomSection.cambiarColor(16, 'white');
              this.bottomSection.cambiarColor(18, 'white');
              this.points[17] = this.gameScore.gRuns;
              break;
              case 19:
                this.bottomSection.cambiarColor(18, 'red');
                this.bottomSection.cambiarColor(17, 'white');
                this.bottomSection.cambiarColor(19, 'white');
                this.points[18] = this.gameScore.gRuns;
                break;
                case 20:
                  this.bottomSection.cambiarColor(19, 'red');
                  this.bottomSection.cambiarColor(18, 'white');
                  this.bottomSection.cambiarColor(0, 'white');
                  this.points[19] = this.gameScore.gRuns;
               break;
        default:
          console.log('Count no válido');
          break;
      }
    }
  }