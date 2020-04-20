import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public nativeStorage: NativeStorage) {}

  
  private elapsed: any = {
    m: '00',
    s: '00',
    hs: '00'
  }

  private timesAr: any;
  private startTime: any = false;
  private overallTimer: any = false; // running timer function
  private elapsedTime: any; 

  private testVar: any = '';


  clickTimer() {
    /*
      if timer is not running, start timer. If timer is running, 
      stopp it an call function to process result.
    */
    
    if (!this.startTime) {
      this.startTime = new Date().getTime();
      this.runTimer();
    }
    else {
      clearInterval(this.overallTimer);
      this.startTime = false;
      this.finishTry();
    }

    // Storage Test
    this.nativeStorage.setItem(
      'myitem', 
      {property: 'value', anotherProperty: 'anotherValue'}
    ).then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
    );

    this.nativeStorage.getItem('myitem').then((data)=>{
      this.testVar = data;
    });

  }

  
  
  finishTry() {
    /* 
      1. Zeit in Array speichern
      2. Zeitentabelle aktualisieren
      3. Bestzeit aktualisieren
    */
    
    this.addTimeToResults();
    this.refreshBestTime();
  }

  addTimeToResults() {
    /*
      Resultate Laden, Zeit einfügen, Resultate speichern
      Format:
        timestamp = [milliseconds]
        trytime = [milliseconds]
    */
    let lastTry: any = {
      timestamp: this.startTime,
      tryTime: this.elapsedTime
    }

    

    //this.nativeStorage.setItem('timeAr',this.timesAr)

    //this.elapsedTime
  }

  refreshBestTime() {

  }

  storeAllValues() {
    
  }



  runTimer() {

    let countDownDate = new Date();

    this.overallTimer = setInterval(() => {
      let now = new Date().getTime();

      // Find the distance between now an the count down date
      this.elapsedTime = now - this.startTime;

      // Time calculations for hours, minutes and seconds
      
      this.elapsed.m = Math.floor((this.elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
      this.elapsed.s = Math.floor((this.elapsedTime % (1000 * 60)) / 1000);
      this.elapsed.hs = Math.floor((this.elapsedTime % (1000)) / 10);
      
      /*let secs = Math.floor(elapsedTime / 1000);


      this.elapsed.m = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
      this.elapsed.s = Math.floor((elapsedTime % (1000 * 60)) / 1000);
      this.elapsed.hs = Math.floor((elapsedTime % 1000)  / 10);*/

      this.elapsed.m = this.pad(this.elapsed.m, 2);
      this.elapsed.s = this.pad(this.elapsed.s, 2);
      this.elapsed.hs = this.pad(this.elapsed.hs, 2);

    },10)
  }

  pad(num, size) {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }

  updateMyDate($event) {
    console.log($event.split(":"));
  }

}
