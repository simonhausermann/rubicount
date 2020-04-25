import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  private logLevel: number = 0;

  // Start localStorage variables
  private userObject: {
    userName: string, 
    bestTime: string, 
    listTimes: Array<any>,
    sound: boolean,
    darkmode: boolean,
    changedTimes: boolean
  };
  private actualUser: string;
  // End localStorage variables

  private listTimes: any = [];

  constructor() {}

  ionViewWillEnter() {
    this.myLog('method ionViewWillEnter',1);
    this.actualUser = localStorage.getItem('actualUser');
    this.userObject = JSON.parse(localStorage.getItem(this.actualUser));
    this.myLog('user "'+this.actualUser+'" - '+JSON.stringify(this.userObject),2);

    this.displayTimes();
    
  }

  public importOne() {
    this.myLog('method importOne',1);

  }

  public importMany() {
    this.myLog('method importMany',1);

  }

  private displayTimes() {
    this.myLog('method displayTimes',1);
    //this.myLog('userObject: '+JSON.stringify(this.userObject),2);
    //this.myLog('userObject.listTimes: '+JSON.stringify(this.userObject.listTimes),2);
    let tempArray = [];
    let tempTimes = this.userObject.listTimes;
    if (tempTimes.length > 0) {
      tempTimes.sort(compareValues('timeStamp', 'desc'));
      tempTimes = addIdToArrayOfObjects(tempTimes);
      tempArray = tempTimes;
    }

    this.myLog('Array this.listTimes: '+JSON.stringify(this.listTimes),2);
    this.listTimes = tempTimes;

    this.userObject.changedTimes = false;
  }
  
  public deleteTime(delTry) {
    this.myLog('method deleteTime',1);
    this.myLog('Delete item: '+JSON.stringify(delTry),2);

    this.deleteTryFromArray(delTry);
    localStorage.setItem(this.actualUser,JSON.stringify(this.userObject));
    
    this.myLog('++'+delTry.tryTimeFormat+' vs. '+this.userObject.bestTime,2);

    if (delTry.tryTimeFormat == this.userObject.bestTime) {
      this.calculateNewBestTime();
    }
    localStorage.setItem(this.actualUser,JSON.stringify(this.userObject));
    this.userObject.changedTimes = true;
    this.displayTimes();
  }

  private calculateNewBestTime() {
    this.myLog('method calculateNewBestTime',2);
    let best = 999999999;
    this.userObject.listTimes.forEach(function (item) {
      //console.log('check: 'JSON.stringify(item));
      if (item.tryTime < best) {
        best = item.tryTime;
      }
    });
    this.userObject.bestTime = formateTime(best);
  }

  private myLog(consoleText: string, level: number) {
    if (this.logLevel >= level) {
      console.log('times: '+consoleText);
    }
    return;
  }

  private deleteTryFromArray(deleteObject) {
    this.myLog('method deleteTryFromArray',2);

    let tmpAr = [];
    this.userObject.listTimes.forEach(function (item) {
      if (item.timeStamp != deleteObject.timeStamp) {
        tmpAr.push(item);
      }
    });
    tmpAr.sort(compareValues('timeStamp', 'desc'));
    tmpAr = addIdToArrayOfObjects(tmpAr);

    this.userObject.listTimes = tmpAr;
  
    return;
  }

} // end Class

function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

function formateTime(timeInMs) {
  //alert(timeInMs);
  let timeAr: any = { m: '00', s: '00', hs: '00'}
  timeAr.m = Math.floor((timeInMs % (1000 * 60 * 60)) / (1000 * 60));
  timeAr.s = Math.floor((timeInMs % (1000 * 60)) / 1000);
  timeAr.hs = Math.floor((timeInMs % (1000)) / 10);
  
  timeAr.m = pad(timeAr.m, 2);
  timeAr.s = pad(timeAr.s, 2);
  timeAr.hs = pad(timeAr.hs, 2);

  return timeAr.m + ':' + timeAr.s + '.' + timeAr.hs;
}

function addIdToArrayOfObjects(myArray) {
  if (!Array.isArray(myArray)) { return []; }

  let counter: any = 0;
  myArray.forEach(function (item) {
    item.id = myArray.length - counter;
    item.tryTimeFormat = formateTime(item.tryTime);
    counter++;
  });
  return myArray;
}

function pad(num, size) {
  let s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}




