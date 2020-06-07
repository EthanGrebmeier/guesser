import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guesser',
  templateUrl: './guesser.component.html',
  styleUrls: ['./guesser.component.scss']
})
export class GuesserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.lowOrHi = 'Good Luck!';
    this.guesses = 'None Yet';
  }

  randomNumber: number = Math.floor(Math.random() * 100 ) + 1;
  guesses: String = ' ';
  lastResult: String  = ' ';
  lowOrHi: String = ' ';
  guess: String = ''; 
  //const body = document.querySelector('body');
  guessCount: number = 1;
  //let resetButton;
  ended: boolean = false;
  first: boolean = true;
  //guessField.focus();
  
  checkGuess(){
    console.log(this.randomNumber);
      if (!this.ended){
          let userGuess = Number(this.guess);
          if (this.first){
              this.guesses = '';
              this.first = false;
          }
          this.guesses += userGuess + ' ';
          console.log(userGuess);
          if (userGuess == this.randomNumber) {

            this.lowOrHi = 'Congratulations!';
            
            //body.classList.add('success');
            this.setGameOver();

          } else if( this.guessCount == 10){
            this.lowOrHi = "Game Over!";
            
            this.setGameOver();
          } else {
              if (userGuess < this.randomNumber){
                this.lowOrHi = 'Too low!'
              } else if(userGuess > this.randomNumber) {
                this.lowOrHi = 'Too high!'
              }
          }

          this.guessCount++;
          this.guess = '';
      } else {
        this.resetGame()
      }

  }


  setGameOver(){

    
    //guessSubmit.classList.remove('submit');
    //guessSubmit.classList.add('reset');
    //guessSubmit.innerText = "Reset?";
    this.ended = true;

  }

  resetGame(){
      try{
          //body.classList.add('failure');
          //body.classList.remove('success');
      } catch (e) {}
      this.guessCount = 1;
      this.lastResult= '';
      this.lowOrHi = '';
      this.guesses= 'None Yet';

      //guessSubmit.classList.remove('reset');
      //guessSubmit.classList.add('submit');

      this.guess = '';
      //guessField.focus();
      this.randomNumber = Math.floor(Math.random() * 100 ) + 1;
      this.ended=false;
      this.first=true;
      this.lowOrHi = 'Good Luck!';
  }

  backgroundClass(){
    let myClasses = {
      fail: this.lowOrHi != 'Congratulations!',
      success: this.lowOrHi == 'Congratulations!'
    }

    return myClasses;
  }
}
