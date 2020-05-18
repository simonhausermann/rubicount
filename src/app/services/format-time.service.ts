import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatTimeService {

  constructor() { }

  public formateTime(timeInMs) {
    
    if (!isNaN(timeInMs)) {
      let timeAr: any = { m: '00', s: '00', hs: '00'}
      timeAr.m = Math.floor((timeInMs % (1000 * 60 * 60)) / (1000 * 60));
      timeAr.s = Math.floor((timeInMs % (1000 * 60)) / 1000);
      timeAr.hs = Math.floor((timeInMs % (1000)) / 10);
      
      timeAr.m = this.pad(timeAr.m, 2);
      timeAr.s = this.pad(timeAr.s, 2);
      timeAr.hs = this.pad(timeAr.hs, 2);
    
      return timeAr.m + ':' + timeAr.s + '.' + timeAr.hs;
    } else {
      console.log('formateTime did not return because NaN param');
    }
  }
  
  private pad(num, size) {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }
  
  public formatDate(timestamp) {
    if (!isNaN(timestamp)) {
      let date = new Date(timestamp);
      let day = date.getDay();
      let month = "0" + date.getMonth();
      let year = "0" + date.getFullYear();

      return day + '.' + month.substr(-2) + '.' + year.substr(-4);
    } else {
      console.log('formatDate did not return because NaN param');
    }
  }
}
