import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild("lineCanvas", { static: true }) lineCanvas: ElementRef;

  /*
    Graph component: https://www.joshmorony.com/adding-responsive-charts-graphs-to-ionic-2-applications/
    Docs: https://www.chartjs.org/docs/latest/
  */

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

  private lineChart: Chart;
  private nrItemsInGraph: any = 10;

  constructor() {}

  ionViewWillEnter() {
    this.myLog('method ionViewWillEnter',1);
    this.ngOnInit();
  }

  ngOnInit() {
    this.myLog('method ngOnInit',1);
    this.loadVars();
    let myArray = this.getYFromArray(this.userObject.listTimes);
    
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      data: {
        labels: myArray['x'],
        datasets: [
          {
            data: myArray['y'],
            backgroundColor: [
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  private loadVars() {
    this.myLog('method loadVars',1);
    this.actualUser = localStorage.getItem('actualUser');
    this.userObject = JSON.parse(localStorage.getItem(this.actualUser));
  }

  private getYFromArray(myArray: any[]) {
    this.myLog('method getYFromArray',1);

    let tmpYAr = [];
    let tmpXAr = [];
    let len = myArray.length;
    myArray.forEach(function (item) {
      if (item.tryTime) tmpYAr.push(item.tryTime / 1000);
      tmpXAr.push('');
    });
    let tmpAr = [];
    tmpAr['x'] = tmpXAr;
    tmpAr['y'] = tmpYAr;

    return tmpAr;
  }

  private myLog(consoleText: string, level: number) {
    if (this.logLevel >= level) {
      console.log('statistics: '+consoleText);
    }
    return;
  }
}
