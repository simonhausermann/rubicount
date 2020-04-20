import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  private listTimes: any = [
    { tryNr: '3', tryDate: '17.4.20', tryTime: '1:45,32' },
    { tryNr: '2', tryDate: '16.4.20', tryTime: '2:03,14' },
    { tryNr: '1', tryDate: '15.4.20', tryTime: '1:57,44' }
  ]

}
