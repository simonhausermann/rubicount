import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormatTimeService } from '../services/format-time.service';
import { ArrayFunctionsService } from '../services/array-functions.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild('scroll-infinite', { static : false }) infiniteScroll: IonInfiniteScroll;

  private logLevel: number = 0;

  // Start localStorage variables
  private userObject: {
    userName: string, 
    bestTime: string, 
    listTimes: Array<any>,
    language: string,
    sound: boolean,
    darkmode: boolean,
    changedTimes: boolean
  };
  private actualUser: string;
  // End localStorage variables

  public listTimes: any = [];
  public listTimesFull: any = [];
  private showItemsStep: number = 20;
  private showItemsCount: number = 20;

  constructor(
    private router: Router, 
    private alertCtrl: AlertController, 
    private myFormat: FormatTimeService, 
    private myArrayFunctions: ArrayFunctionsService,
    private translate: TranslateService
  ) {}

  ionViewWillEnter() {
    this.myLog('method ionViewWillEnter',1);
    this.actualUser = localStorage.getItem('actualUser');
    this.userObject = JSON.parse(localStorage.getItem(this.actualUser));
    this.myLog('user "'+this.actualUser+'" - '+JSON.stringify(this.userObject),2);
    
    this.translate.use(this.userObject.language);
    this.showItemsCount = 20;
    this.displayTimes(this.showItemsStep);
  }

  public goExport() {
    this.router.navigate(['export']);
  }

  private displayTimes(itemsCount) {
    this.myLog('method displayTimes: '+itemsCount,1);
    let showItems = Math.min(itemsCount,this.showItemsCount);
    let tempTimes: any = [];
    this.myLog('userList Array '+JSON.stringify(this.userObject.listTimes),2);
    if (this.userObject.listTimes.length > 0) {
      this.listTimesFull = this.userObject.listTimes;
      this.listTimesFull.sort(this.myArrayFunctions.compareValues('timeStamp', 'desc'));
      this.listTimesFull = this.myArrayFunctions.addIdToArrayOfObjects(this.listTimesFull);
      tempTimes = this.listTimesFull.slice(0,showItems);
      
      for (let i = 0; i < tempTimes.length; i++) {
        tempTimes[i].tryTimeFormat = this.myFormat.formateTime(tempTimes[i].tryTime);
      }
    }
    this.listTimes = tempTimes;

    this.userObject.changedTimes = false;
  }

  doInfinite(event): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.showItemsCount = this.showItemsCount + this.showItemsStep;
        this.displayTimes(this.showItemsCount);
        resolve();
        event.target.complete();
      }, 500);
    })
  }

  async importOne() {
    this.myLog('method importOne',1);

    const prompt = await this.alertCtrl.create({
      header: 'New solve time',
      message: "Enter Time (MM:SS.00)",
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
            this.myLog('Cancel clicked',2);
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
              this.displayTimes(this.showItemsStep);
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
    if (firstAr.length == 2 && firstAr[0].length >= 1 && !isNaN(parseInt(firstAr[0])) && parseInt(firstAr[0])<60) {
      let secondAr = firstAr[1].split('.');
      if (secondAr.length == 2) {
        if (secondAr[0].length == 2 && !isNaN(parseInt(secondAr[0])) && parseInt(secondAr[0])<60) {
          if (secondAr[1].length == 2 && !isNaN(parseInt(secondAr[1])) && parseInt(secondAr[1])<100) {
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

  async importMany() {
    this.myLog('method importMany',1);

    const prompt = await this.alertCtrl.create({
      header: 'Import multiple times',
      message: "List of times (split by space, you can copy from text list or excel) format MM:SS.00",
      inputs: [
        {
          name: 'date',
          type: 'date',
          placeholder: 'DD.MM.YYYY'
        },
        {
          name: 'times',
          type: 'text',
          placeholder: '15:13.11 16:12.33 ...'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            this.myLog('Cancel clicked',2);
          }
        },
        {
          text: 'Save',
          handler: data => {
            let myArray;
            myArray = data.times.split(' ');
            let tryTimestamp;
            if (myArray.length > 0) {
              for (let i = 0; i < myArray.length; i++) {
                if (this.checkImportTimeFormat(myArray[i])) {
                  tryTimestamp = this.getTSfromString(myArray[i]);
                  this.addTimeToResults(new Date(Date.parse(data.date)).getTime()+1000*(myArray.length-i),tryTimestamp);
                }
              }
              this.calculateNewBestTime();
              localStorage.setItem(this.actualUser,JSON.stringify(this.userObject));
              this.displayTimes(this.showItemsStep);
            }
          }
        }
      ]
    });
    await prompt.present();
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
    this.displayTimes(this.showItemsStep);
  }

  private calculateNewBestTime() {
    this.myLog('method calculateNewBestTime',2);
    let best = 999999999;
    this.userObject.listTimes.forEach(function (item) { if (item.tryTime < best) best = item.tryTime; });
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









