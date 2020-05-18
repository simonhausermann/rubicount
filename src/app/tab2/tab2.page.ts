import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { FormatTimeService } from '../services/format-time.service';
import { ArrayFunctionsService } from '../services/array-functions.service';
import { TranslateService } from '@ngx-translate/core';

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
    language: string,
    sound: boolean,
    darkmode: boolean,
    changedTimes: boolean
  };
  private actualUser: string;
  // End localStorage variables

  public bestTime: string;
  public bestDate: string;
  public averageTime: string;
  public sDeviation: string;
  public ao5: string;
  public ao5Best: string;
  public ao5Worst: string;
  public ao12: string;
  public ao12Best: string;
  public ao12Worst: string;
  public countTimes: number;
  public graphCount: number = 50;

  private lineChart: Chart;

  constructor(
    private myFormat: FormatTimeService, 
    private myArrayFunctions: ArrayFunctionsService,
    public translate: TranslateService
  ) {}

  ionViewWillEnter() {
    this.myLog('method ionViewWillEnter',1);
    this.ngOnInit();
    this.bestTime = '-';
    this.bestDate = '-';
    this.averageTime = 'no solves';
    this.ao5 = '-';
    this.ao5Best = '-';
    this.ao5Worst = '-';
    this.ao12 = '-';
    this.ao12Best = '-';
    this.ao12Worst = '-';
    this.userObject.listTimes.sort(this.myArrayFunctions.compareValues('timeStamp', 'desc'));
    this.getStatistics();
  }

  ngOnInit() {
    this.myLog('method ngOnInit',1);
    this.loadVars();
    this.translate.use(this.userObject.language);
    this.drawChart(50);
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
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i].tryTime > 0) {
        tmpYAr.push(myArray[i].tryTime / 1000);
      }
      tmpXAr.push('');
    }
    
    let tmpAr = [];
    tmpAr['x'] = tmpXAr;
    tmpAr['y'] = tmpYAr;

    return tmpAr;
  }

  private getStatistics() {
    this.bestTime = this.userObject.bestTime;
    if (this.userObject.listTimes.length > 0) {
      let ao5Ar = [];
      let ao12Ar = [];
      let ao5Best = 600000;
      let ao12Best = 600000;
      let ao5Worst = 0;
      let ao12Worst = 0;
      let sumTimes = 0;
      let count = 0;
      let allAr = [];
      
      this.userObject.listTimes.forEach(function (item) {
        allAr.push(item.tryTime);
        if (count < 5) { 
          ao5Ar.push(item.tryTime);
          if (item.tryTime < ao5Best) ao5Best = item.tryTime; 
          if (item.tryTime > ao5Worst) ao5Worst = item.tryTime;
        }
        if (count <12) {
          ao12Ar.push(item.tryTime);
          if (item.tryTime < ao12Best) ao12Best = item.tryTime; 
          if (item.tryTime > ao12Worst) ao12Worst = item.tryTime; 
        }
        sumTimes += parseInt(item.tryTime);
        count++;
      });
      this.averageTime = this.myFormat.formateTime(Math.round(sumTimes/(this.userObject.listTimes.length)));

      if (ao5Ar.length == 5) {
        let ao5Sum = 0;
        let ao5BestFound = false;
        let ao5WorstFound = false;
        for (count = 0; count < ao5Ar.length; count++) {
          if (ao5Ar[count] != ao5Best && ao5Ar[count] != ao5Worst) {
            ao5Sum += parseInt(ao5Ar[count]);
          } else {
            if (ao5Ar[count] == ao5Best) {
              if (ao5BestFound) { ao5Sum += parseInt(ao5Ar[count]); }
              ao5BestFound = true;
            }
            if (ao5Ar[count] == ao5Worst) {
              if (ao5WorstFound) { ao5Sum += parseInt(ao5Ar[count]); }
              ao5WorstFound = true;
            }
          }
        }
        this.ao5 = this.myFormat.formateTime(Math.floor(ao5Sum/3));
        this.ao5Best = this.myFormat.formateTime(ao5Best);
        this.ao5Worst = this.myFormat.formateTime(ao5Worst);
      }

      if (ao12Ar.length == 12) {
        let ao12Sum = 0;
        let ao12BestFound = false;
        let ao12WorstFound = false;
        for (count = 0; count < ao12Ar.length; count++) {
          if (ao12Ar[count] != ao12Best && ao12Ar[count] != ao12Worst) {
            ao12Sum += parseInt(ao12Ar[count]);
          } else {
            if (ao12Ar[count] == ao12Best) {
              if (ao12BestFound) { ao12Sum += parseInt(ao12Ar[count]); }
              ao12BestFound = true;
            }
            if (ao12Ar[count] == ao12Worst) {
              if (ao12WorstFound) { ao12Sum += parseInt(ao12Ar[count]); }
              ao12WorstFound = true;
            }
          }
        }
        this.ao12 = this.myFormat.formateTime(Math.floor(ao12Sum/10));
        this.ao12Best = this.myFormat.formateTime(ao12Best);
        this.ao12Worst = this.myFormat.formateTime(ao12Worst);
      }
      this.sDeviation = standardDeviation(allAr).toFixed(2);
    }
    this.countTimes = this.userObject.listTimes.length;
  }

  public drawChart(showNr: number = 0) {
    this.myLog('method drawChart - showNr: '+showNr,1);
    this.graphCount = showNr;
    let myArray = this.userObject.listTimes;
    myArray.sort(this.myArrayFunctions.compareValues('timeStamp', 'asc'));
    if (showNr > 0) myArray = myArray.slice(myArray.length - showNr, myArray.length);
    myArray = this.getYFromArray(myArray);

    let firstArray: any = [];
    let secondArray: any = [];
    let tryArray = [];
    let worstBestArray = [];
    let bestFound: boolean = false;
    let worstFound: boolean = false;
    // firstArray = myArray;
    if (showNr==5) {
      for (let i = 0; i < myArray['y'].length; i++) {
        //this.myLog('compare '+this.ao5Best+' with '+this.myFormat.formateTime(myArray['y'][i]*1000),0);
        if (!bestFound && this.ao5Best == this.myFormat.formateTime(myArray['y'][i]*1000)) {
          worstBestArray[i] = myArray['y'][i];
          tryArray[i] = null;
          bestFound = true;
        } else if (!worstFound && this.ao5Worst == this.myFormat.formateTime(myArray['y'][i]*1000)) {
          worstBestArray[i] = myArray['y'][i]
          tryArray[i] = null;
          worstFound = true;
        } else {
          tryArray[i] = myArray['y'][i];
          worstBestArray[i] = null;
        }
      }
      firstArray['y'] = tryArray;
      secondArray['y'] = worstBestArray;
    } else if (showNr == 12) {
      for (let i = 0; i < myArray['x'].length; i++) {
        if (!bestFound && this.ao12Best == this.myFormat.formateTime(myArray['y'][i]*1000)) {
          worstBestArray[i] = myArray['y'][i];
          tryArray[i] = null;
          bestFound = true;
        } else if (!worstFound && this.ao12Worst == this.myFormat.formateTime(myArray['y'][i]*1000)) {
          worstBestArray[i] = myArray['y'][i]
          tryArray[i] = null;
          worstFound = true;
        } else {
          tryArray[i] = myArray['y'][i];
          worstBestArray[i] = null;
        }
      }
      firstArray['y'] = tryArray;
      secondArray['y'] = worstBestArray;
    } else {
      firstArray['y'] = myArray['y'];
    }

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      data: {
        labels: myArray['x'],
        datasets: [/*{
          data: myArray['y'],
          borderWidth: 0,
          borderColor:  'rgba(0, 0 , 0, 0.5)',
          pointBorderColor:  'rgba(255, 20, 10, 0.9)',
          showLines: true,
          pointRadius: 0,
          pointStyle: 'circle',
          spanGaps: true,
          display: true
        },*/
        {
          data: firstArray['y'],
          borderWidth: 1,
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor:  'rgba(255, 20 , 10, 0.5)',
          pointBorderColor:  'rgba(255, 20, 10, 0.9)',
          pointRadius: 1,
          pointStyle: 'circle',
          spanGaps: true,
          display: false
        },
        {
          data: secondArray['y'],
          borderWidth: 1,
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor:  'rgba(0, 0 , 0, 0)',
          pointBorderColor:  'rgba(54, 162, 235, 0.9)',
          pointRadius: 2,
          pointStyle: 'circle',
          spanGaps: false,
          display: false
        }],
      },
      options: {
        spanGaps: false,
        showLines: true,
        legend: {
          display: false
        },
        scales: {
          yAxes: [{ ticks: { beginAtZero: true } }],
          xAxes: [{
              display: false,
              gridLines: {
                drawBorder: true,
                display: false
              }
          }]
        }
      }
    });
    //this.lineChart.update();
  }
  
  private myLog(consoleText: string, level: number) {
    if (this.logLevel >= level) {
      console.log('statistics: '+consoleText);
    }
    return;
  }
}


function standardDeviation(values){
  var avg = average(values);
  
  var squareDiffs = values.map(function(value){
    var diff = value - avg;
    var sqrDiff = diff * diff;
    return sqrDiff;
  });
  
  var avgSquareDiff = average(squareDiffs);

  var stdDev = Math.sqrt(avgSquareDiff);
  return Math.round(stdDev/10)/100;
}

function average(data){
  var sum = data.reduce(function(sum, value){
    return sum + value;
  }, 0);

  var avg = sum / data.length;
  return avg;
}
