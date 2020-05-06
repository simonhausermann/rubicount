import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatTimeService {

  constructor() { }

  public formateTime(timeInMs) {
    console.log('formateTime with param '+timeInMs);
    if (!isNaN(timeInMs)) {
      let timeAr: any = { m: '00', s: '00', hs: '00'}
      timeAr.m = Math.floor((timeInMs % (1000 * 60 * 60)) / (1000 * 60));
      timeAr.s = Math.floor((timeInMs % (1000 * 60)) / 1000);
      timeAr.hs = Math.floor((timeInMs % (1000)) / 10);
      
      timeAr.m = this.pad(timeAr.m, 2);
      timeAr.s = this.pad(timeAr.s, 2);
      timeAr.hs = this.pad(timeAr.hs, 2);
    
      console.log('formatTime returns: '+timeAr.m + ':' + timeAr.s + '.' + timeAr.hs);
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
      console.log('formatDate with param '+timestamp);
      let date = new Date(timestamp);
      // Hours part from the timestamp
      let day = date.getDay();
      // Minutes part from the timestamp
      let month = "0" + date.getMonth();
      // Seconds part from the timestamp
      let year = "0" + date.getFullYear();

      // Will display time in 10:30:23 format
      console.log('formatTime returns: '+day + '/' + month.substr(-2) + '/' + year.substr(-4));
      return day + '.' + month.substr(-2) + '.' + year.substr(-4);
    } else {
      console.log('formatDate did not return because NaN param');
    }
  }
}
