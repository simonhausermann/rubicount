import { Component } from '@angular/core';
import { isString, isNull } from 'util';
import { FormatTimeService } from '../services/format-time.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private logLevel = 0;

  /* Local storage
    actualUser: string
    [username]: stringified userArray
    changedTimes: boolean (string of '0': unchanged, '1': changed)
  */
  
  // Start localStorage variables
  private userObject: {
    userName: string, 
    bestTime: string, 
    listTimes: Array<any>,
    sound: boolean,
    darkmode: boolean,
    changedTimes: boolean
  } = { 
      userName: 'User 1',
      bestTime: '59:59.99',
      listTimes: [],
      sound: true,
      darkmode: false,
      changedTimes: true
  };
  private actualUser: string;
  private userListAr: Array<string> = [];
  // End localStorage Variables

  public timesArray: Array<Object> = [];
  public bestTime: any = '-';
  public currentTimeDisplay: any = '00:00.00';

  private startTime: any = false; // timer start
  private overallTimerFunc: any = false; // running timer function
  private elapsedTime: any; // ms after startTime

  private sound: string;
  private darkmode: string;

  private funFacts: Array<string>;
  public funFact: string = '';

  public logo: string = '../assets/images/logo.png';
  public hands: string = '../assets/images/hands.png';

  constructor(private myFormat: FormatTimeService) {
    this.funFacts = this.getFunfacts();
    console.log('log level: '+this.logLevel);
  }

  ionViewWillEnter() {
    this.myLog('method ionViewWillEnter',1);
    
    this.actualUser = String(localStorage.getItem('actualUser'));
    if (!this.actualUser || this.actualUser == '' || this.actualUser == 'null') { 
      this.myLog('no user found in storage, store defaul User 1: '+JSON.stringify(this.userObject),2);
      this.myLog('this.userObject.userName:'+this.userObject.userName,2);
      this.actualUser = this.userObject.userName;
      this.userListAr.push(this.actualUser);
    } else {
      this.myLog('user found: '+this.actualUser,2);
      this.userObject = JSON.parse(localStorage.getItem(this.actualUser));
      this.userListAr = JSON.parse(localStorage.getItem('userListAr'));
    }

    this.myLog('set actual User in Storage: '+this.actualUser,2);
    localStorage.setItem('actualUser',this.actualUser);
    this.myLog('current userListAr: '+JSON.stringify(this.userListAr),2);
    localStorage.setItem('userListAr',JSON.stringify(this.userListAr));
    localStorage.setItem(this.actualUser,JSON.stringify(this.userObject));
    this.myLog('userObject = '+JSON.stringify(this.userObject),2);

    this.bestTime = this.userObject.bestTime;
    
  }

  clickTimer() {
    this.myLog('method clickTimer',1);
    /*
      if timer is not running, start timer. If timer is running, 
      stopp it an call function to process result.
    */
    if (!this.startTime) { // start new timer
      this.startTime = new Date().getTime();
      this.funFact = '';
      
      let countDownDate = new Date();

      this.overallTimerFunc = setInterval(() => {
        let now = new Date().getTime();

        // Find the distance between now an the count down date
        this.elapsedTime = now - this.startTime;

        // Time calculations for hours, minutes and seconds
        
        this.currentTimeDisplay = this.myFormat.formateTime(this.elapsedTime);

      },10)

    }
    else { // stop timer
      clearInterval(this.overallTimerFunc);
      this.finishTry();
      this.startTime = false;
      let randomNr = Math.floor(Math.random() * this.funFacts.length);
      this.myLog('display fun fact nr '+randomNr,2)
      this.funFact = this.funFacts[randomNr];
    }
  }

  private finishTry() {
    this.myLog('method finishTry',1);
    /* 
      1. Zeit in Array speichern
      2. Zeitentabelle aktualisieren
      3. Bestzeit aktualisieren
    */
    
    this.addTimeToResults();
    this.refreshBestTime();
    this.storeAllValues();
  }

  private addTimeToResults() {
    this.myLog('method addTimeToResults',1);
    this.userObject.listTimes.push({
      timeStamp: this.startTime + this.elapsedTime,
      tryTime: this.elapsedTime
    });
    this.myLog('user.listTimes after: '+JSON.stringify(this.userObject.listTimes),2);
  }

  private refreshBestTime() {
    this.myLog('refreshBestTime',1);
    
    if (this.userObject.bestTime == '00:00,00' || this.myFormat.formateTime(this.elapsedTime) < this.userObject.bestTime) {
      console.log('faster');
      this.bestTime = this.myFormat.formateTime(this.elapsedTime);
    } else {
      console.log('slower');
    }
    
    this.userObject.bestTime = this.bestTime;
  }

  private storeAllValues() {
    this.myLog('method storeAllValues: ',1);
    this.userObject.changedTimes = true;
    localStorage.setItem(this.actualUser,JSON.stringify(this.userObject));
  }

  private myLog(consoleText: string, level: number) {    
    if (this.logLevel >= level) {
      console.log('timer: '+consoleText);
    }
    return;
  }
  
  private getFunfacts() {
    return [
      "God's Number shows the smallest number of moves needed to solve the 3x3x3 Rubik's Cube from any random starting position. Since July of 2010 we know that this number is 20, so every position can be solved in twenty moves or less.",
      "It's estimated that less than 5.8% of the world's population can solve the Rubik's Cube. Statistics show that 1 in 20 people who own a Rubik's Cube can solve a Rubik's Cube.",
      "In 1974, a young professor of architecture in Budapest created the apparently impossible object.",
      "The first Magic Cube (as it was originally known) was sold in a Budapest toy shop in 1975.",
      "The puzzle is made up of twenty-six miniature cubes, known as 'cubies' or 'cubelets'",
      "The Magic Cube was renamed Rubik's Cube in 1980.",
      "The Rubik's Cube won Toy of the Year in 1980 and 1981.",
      "Over 350 million Rubik’s Cubes have been sold worldwide – making it the bestselling toy of all time.",
      "A Rubik's Cube has 43,252,003,274,489,856,000 possible configurations.",
      "With six coloured sides, 21 pieces and 54 outer surfaces, there's a combined total of over 43 QUINTILLIOIN different possible configurations.",
      "If you turned Rubik's Cube once every second it would take you 1400 TRILLION YEARS to finish to go through all the configurations.",
      "The best speed cubers* can solve the cube in under six seconds.",
      "The current world record holder is Mats Valk from the Netherlands. Who completed the puzzle in 5.55 seconds.",
      "Some speed-cubers go for style points over raw speed.",
      "A <a href='https://youtu.be/tSqUcrFJ498'>three-year-old in China</a> solved the puzzle in under two minutes.",
      "Legos & smartphone <a href='https://www.reddit.com/r/gifs/comments/lgy6c/legos_smartphone_solve_rubiks_cube_faster_than/'>solve Rubik's cube</a> faster than human record"
    ]
  }

}

