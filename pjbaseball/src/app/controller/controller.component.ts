import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controller',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {
// Valores de tarjeta de jugador  
  pName: string = '';
  pNumber: string = '';
  pVel: string = '';
  tThrows: string = '';
  strikes: string = '';
  balls: string = '';

// Valores de marcador
  gameRuns: number = 0;
  counter: number = 0;
  counterTeam2: number = 0;
  counterTeam1: number = 0;

  team1: string = '';
  team1H: number = 0;
  team1E: number = 0;
  team1Strikes: number = 0;
  team1Balls: number = 0;
  team1Out: number = 0;

  team2: string = '';
  team2H: number = 0;
  team2E: number = 0;
  team2Strikes: number = 0;
  team2Balls: number = 0;
  team2Out: number = 0;

  gameBall: string = '';
  gameStrike: string = '';

  imageUrl: string = ''; // Aquí almacenarás la URL como string

  ImgUp(){
    const inputElement = document.getElementById('fileInput') as HTMLInputElement;

    if (inputElement.files && inputElement.files[0]) {
      const file = inputElement.files[0];
      const fileUrl = URL.createObjectURL(file);
      this.imageUrl = fileUrl; // Guardamos la URL como string
      console.log('URL del archivo seleccionado:', this.imageUrl);
    }

    if (window.opener) {
      const img = {
      
      };
      window.opener.postMessage({ type: 'imgInfo', payload: img }, '*');
    } else {
      console.error('No opener window found');
    }
  }

  sendText() {
    if (window.opener) {
      const text = {
        name: this.pName,
        number: this.pNumber,
        speed: this.pVel,
        throws: this.tThrows,
        strike: this.strikes,
        ball: this.balls
      };
      window.opener.postMessage({ type: 'playerData', payload: text }, '*');
    } else {
      console.error('No opener window found');
    }
  }
  sendData(){
    if(this.team1Strikes == 3){
      this.team1Out = Number(this.team1Out)+1;
      this.team1Strikes = 0;
    } else if(this.team2Strikes == 3){
      this.team2Out = Number(this.team2Out)+1;
      this.team2Strikes = 0;
    } 

    if (window.opener) {
      const data = {

        gBall: this.gameBall,
        gStrike: this.gameStrike,

        tym2: this.team2,
        th2: this.team2H,
        te2: this.team2E,
        ts2: this.team2Strikes,
        tb2: this.team2Balls,
        to2: this.team2Out,

        tym1: this.team1,
        th1: this.team2H,
        te1: this.team2E,
        ts1: this.team2Strikes,
        tb1: this.team2Balls,
        to1: this.team1Out
      };
      window.opener.postMessage({ type: 'gameData', payload: data }, '*'); 
    } else {
      console.error('No opener window found');
    }

  }

 

  next() {
    this.counter = this.counter +1;
    if(this.counter==21){
      this.counter = 1;
    }

    if(this.counter%2 == 0){
      this.counterTeam2 = Number(this.counterTeam2) + Number(this.gameRuns);
    } else {
      this.counterTeam1 = Number(this.counterTeam1) + Number(this.gameRuns);
    }
    
    if (window.opener) {
    const score = {
      gRuns: this.gameRuns,
      count: this.counter,
      Tm1: this.counterTeam1,
      Tm2: this.counterTeam2
    };
    window.opener.postMessage({ type: 'gameScore', payload: score }, '*'); 
  } else {
    console.error('No opener window found');
  }

  }
  back() {
    this.counter = this.counter -1;
    if(this.counter==0){
      this.counter = 20;
    }

    if(this.counter%2 == 0){
      this.counterTeam2 = Number(this.counterTeam2) + Number(this.gameRuns);
    } else {
      this.counterTeam1 = Number(this.counterTeam1) + Number(this.gameRuns);
    }


    if (window.opener) {
      const score = {
        gRuns: this.gameRuns,
        count: this.counter,
        Tm1: this.counterTeam1,
        Tm2: this.counterTeam2
      };
      window.opener.postMessage({ type: 'gameScore', payload: score }, '*'); 
    } else {
      console.error('No opener window found');
    }
  }
}
