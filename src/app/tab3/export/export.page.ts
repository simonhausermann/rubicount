import { Component, OnInit } from '@angular/core';
import { FormatTimeService } from '../../services/format-time.service';
import { ArrayFunctionsService } from '../../services/array-functions.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-export',
  templateUrl: './export.page.html',
  styleUrls: ['./export.page.scss'],
})
export class ExportPage implements OnInit {

  exportArea: string = 'asdfasdf\nsdfasfasd\ndsfsasfasdfa\nsdfadfasdf';

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

  public listAr: any = [];

  constructor(
    private myFormat: FormatTimeService, 
    private myArrayFunctions: ArrayFunctionsService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
  }

  public ionViewWillEnter() {
    this.actualUser = localStorage.getItem('actualUser');
    this.userObject = JSON.parse(localStorage.getItem(this.actualUser));
    this.translate.use(this.userObject.language);
    this.exportArea = this.getTimeString(true,'\n');
  }

  public segmentChanged(event) {
    if (event.detail.value == 'time') {
      console.log('time');
      this.listAr = this.getTimeAr(false);
      this.exportArea = this.getTimeString(false,'\n');
    } else {
      console.log('date');
      this.listAr = this.getTimeAr(true);
      this.exportArea = this.getTimeString(true,'\n');
    }
  }

  private getTimeString(withDate: boolean, separator: string = '') {
    let timesAr = this.getTimeAr(withDate);
    let stringAr = [];
    let tmpString = '';
    for (let i = 0; i < timesAr.length; i++) {
      console.log(timesAr[i].tryTime);
      tmpString = timesAr[i].tryTimeFormat;
      if (withDate) {
        tmpString = timesAr[i].dateFormat + ' ' + tmpString;
      }
      stringAr.push(tmpString);
    }
    return stringAr.join(separator);
  }

  private getTimeAr(withDate: boolean) {
    let tmpAr: { tryTimeFormat: string, dateFormat: string };
    let timesAr = this.userObject.listTimes.sort(this.myArrayFunctions.compareValues('timeStamp', 'desc'));
    let stringAr = [];

    for (let i = 0; i < timesAr.length; i++) {
      tmpAr = { tryTimeFormat: this.myFormat.formateTime(timesAr[i].tryTime), dateFormat: '' };
      if (withDate) {
        tmpAr.dateFormat = this.myFormat.formatDate(timesAr[i].timeStamp);
      }
      stringAr.push(tmpAr);
    } 
    return stringAr;
  }
}
