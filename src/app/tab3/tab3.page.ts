import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormatTimeService } from '../services/format-time.service';
import { ArrayFunctionsService } from '../services/array-functions.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  private logLevel: number = 2;

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

  constructor(private alertCtrl: AlertController, private myFormat: FormatTimeService, private myArrayFunctions: ArrayFunctionsService) {}

  ionViewWillEnter() {
    this.myLog('method ionViewWillEnter',1);
    this.actualUser = localStorage.getItem('actualUser');
    this.userObject = JSON.parse(localStorage.getItem(this.actualUser));
    this.myLog('user "'+this.actualUser+'" - '+JSON.stringify(this.userObject),2);

    this.displayTimes();
  }

  async importOne() {
    this.myLog('method importOne',1);

    const prompt = await this.alertCtrl.create({
      header: 'New solve time',
      message: "Enter Time (MM:SS.00",
      inputs: [
        {
          name: 'time',
          type: 'text',
          placeholder: 'MM:SS.00'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            if (this.checkImportTimeFormat(data.time)) {
              let tryTimestamp = this.getTSfromString(data.time);
              this.addTimeToResults(new Date().getTime(),tryTimestamp);
              this.calculateNewBestTime();
              localStorage.setItem(this.actualUser,JSON.stringify(this.userObject));
              this.displayTimes();
            }
          }
        }
      ]
    });
    await prompt.present();
  }

  private getTSfromString(timeString: string) {
    let firstAr = timeString.split(':');
    let secondAr = firstAr[1].split('.');
    return parseInt(firstAr[0])*60*1000+parseInt(secondAr[0])*1000+parseInt(secondAr[1])*10;
  }

  private checkImportTimeFormat(importTime: string): boolean {
    let firstAr = importTime.split(':');
    if (firstAr.length == 2 && firstAr[0].length == 2 && parseInt(firstAr[0])>0 && parseInt(firstAr[0])<60) {
      let secondAr = firstAr[1].split('.');
      if (secondAr.length == 2) {
        if (secondAr[0].length == 2 && parseInt(secondAr[0])>0 && parseInt(secondAr[0])<60) {
          if (secondAr[1].length == 2 && parseInt(secondAr[1])>0 && parseInt(secondAr[1])<100) {
            return true;
          }
        }
      }
    } 
    return false;
  }

  private addTimeToResults(timestamp, timeString) {
    this.myLog('method addTimeToResults',1);
    this.myLog('user.listTimes before: '+JSON.stringify(this.userObject.listTimes),2);
    
    this.userObject.listTimes.push({timeStamp: timestamp, tryTime: timeString});
    localStorage.setItem(this.actualUser,JSON.stringify(this.userObject));
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
      tempTimes.sort(this.myArrayFunctions.compareValues('timeStamp', 'desc'));
      tempArray = this.myArrayFunctions.addIdToArrayOfObjects(tempTimes);
      for (let i = 0; i < tempArray.length; i++) {
        tempArray[i].tryTimeFormat = this.myFormat.formateTime(tempArray[i].tryTime);
      }
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
      if (item.tryTime < best) {
        best = item.tryTime;
      }
    });
    this.userObject.bestTime = this.myFormat.formateTime(best);
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
    tmpAr.sort(this.myArrayFunctions.compareValues('timeStamp', 'desc'));
    tmpAr = this.myArrayFunctions.addIdToArrayOfObjects(tmpAr);

    this.userObject.listTimes = tmpAr;
  
    return;
  }

} // end Class









