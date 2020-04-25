import { Component } from '@angular/core';
import { isString, isNull } from 'util';


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

  constructor() {}


  ionViewWillEnter() {
    this.myLog('method ionViewWillEnter',1);
    
    this.actualUser = String(localStorage.getItem('actualUser'));
    if (!this.actualUser || this.actualUser == '' || this.actualUser == 'null') { 
      this.myLog('no user found in storage, store defaul User 1: '+JSON.stringify(this.userObject),2);
      this.myLog('this.userObject.userName:'+this.userObject.userName,2)
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
    if (!this.startTime) {
      this.startTime = new Date().getTime();
      
      let countDownDate = new Date();

      this.overallTimerFunc = setInterval(() => {
        let now = new Date().getTime();

        // Find the distance between now an the count down date
        this.elapsedTime = now - this.startTime;

        // Time calculations for hours, minutes and seconds
        
        this.currentTimeDisplay = this.formateTime(this.elapsedTime);

      },10)

    }
    else {
      clearInterval(this.overallTimerFunc);
      this.finishTry();
      this.startTime = false;
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
    this.myLog('user.listTimes before: '+JSON.stringify(this.userObject.listTimes),2);
    /*
      Load results, push new try, save results
      Format:
        timeStamp = [milliseconds]
        tryTime = [milliseconds]
    */
    let lastTry: any = {
      timeStamp: this.startTime + this.elapsedTime,
      tryTime: this.elapsedTime
    }
    
    this.userObject.listTimes.push(lastTry);
    this.myLog('user.listTimes after: '+JSON.stringify(this.userObject.listTimes),2);
  }

  private refreshBestTime() {
    this.myLog('refreshBestTime',1);
    
    if (this.userObject.bestTime == '00:00,00' || this.formateTime(this.elapsedTime) < this.userObject.bestTime) {
      console.log('faster');
      this.bestTime = this.formateTime(this.elapsedTime);
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

  private formateTime(timeInMs) {
    this.myLog('method formatTime',1);
    //alert(timeInMs);
    let timeAr: any = { m: '00', s: '00', hs: '00'}
    timeAr.m = Math.floor((timeInMs % (1000 * 60 * 60)) / (1000 * 60));
    timeAr.s = Math.floor((timeInMs % (1000 * 60)) / 1000);
    timeAr.hs = Math.floor((timeInMs % (1000)) / 10);
    
    timeAr.m = this.pad(timeAr.m, 2);
    timeAr.s = this.pad(timeAr.s, 2);
    timeAr.hs = this.pad(timeAr.hs, 2);

    return timeAr.m + ':' + timeAr.s + '.' + timeAr.hs;
  }

  pad(num, size) {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }

  private myLog(consoleText: string, level: number) {
    if (this.logLevel >= level) {
      console.log('timer: '+consoleText);
    }
    return;
  }
  
  

}

