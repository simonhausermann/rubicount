import { Component } from '@angular/core';
import { FormatTimeService } from '../services/format-time.service';
import { ScramblesService } from '../services/scrambles.service';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private logLevel = 0;

  /* Local storage
    actualUser: string
    [username]: stringified userArray
    changedTimes: boolean (string of '0': unchanged, '1': changed)
  */

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
  public actualUser: string;
  // End localStorage Variables

  public showIt: boolean = true;
  public timesArray: Array<Object> = [];
  public bestTime: any = '-';
  public currentTimeDisplay: any = '00:00.00';
  public finishedTry: boolean = false;

  public scrambleTournament: string = '';
  public scrambleString: string = '';

  private startTime: any = false; // timer start
  private overallTimerFunc: any = false; // running timer function
  private elapsedTime: any; // ms after startTime
  private sleepModeFunction: any = false;
  private maxRunningTime = 1200000;
  public plus2 = false;

  private sound: string;
  private darkmode: string;

  private funFacts: Array<string>;
  public funFact: string = '';

  public logo: string = '../assets/images/logo.png';
  public hands: string = '../assets/images/hands.png';

  constructor(
    private scrambler: ScramblesService, 
    private insomnia: Insomnia, 
    public translate: TranslateService,
    private myFormat: FormatTimeService) {
      this.translate.setDefaultLang('en');
      this.translate.use('de');
    }

  ionViewWillEnter() {
    this.myLog('method ionViewWillEnter',1);

    this.setNewScramble();
    
    this.actualUser = String(localStorage.getItem('actualUser'));
    this.userObject = JSON.parse(localStorage.getItem(this.actualUser));

    this.translate.use(this.userObject.language);
    this.bestTime = this.userObject.bestTime;
    this.funFacts = this.getFunfacts(this.userObject.language);
  }

  private setNewScramble() {
    let randIndex = Math.floor(Math.random() * this.scrambler.scrambles.length);
    this.scrambleTournament = this.scrambler.scrambles[randIndex].tournament;
    this.scrambleString = this.scrambler.scrambles[randIndex].scramble;
  }

  clickTimer() {
    this.myLog('method clickTimer',1);
    /*
      if timer is not running, start timer. If timer is running, 
      stopp it an call function to process result.
    */
    if (!this.startTime) { // start new timer
      this.showIt = false;
      this.plus2 = false;
      this.insomnia.keepAwake().then(
        () => this.myLog('success keep awake',2),
        () => this.myLog('error keep awake',2)
      );
      this.startTime = new Date().getTime();
      this.funFact = '';

      let countDownDate = new Date();
      this.sleepModeFunction = setInterval(() => {
        this.insomnia.allowSleepAgain().then(
          () => this.myLog('success allow sleep again',2),
          () => this.myLog('error allow sleep again',2)
        );
        this.clickTimer();
      },this.maxRunningTime+1000);

      this.overallTimerFunc = setInterval(() => {
        let now = new Date().getTime();

        // Find the distance between now an the count down date
        this.elapsedTime = now - this.startTime;
        // Time calculations for hours, minutes and seconds
        this.currentTimeDisplay = this.myFormat.formateTime(this.elapsedTime);

      },10)

    }
    else { // stop timer
      this.showIt = true;
      this.finishedTry = true;
      this.insomnia.allowSleepAgain().then(
        () => this.myLog('success allow sleep again',2),
        () => this.myLog('error allow sleep again',2)
      );
      clearInterval(this.overallTimerFunc);
      clearInterval(this.sleepModeFunction);
      this.finishTry();
      this.startTime = false;
      let randomNr = Math.floor(Math.random() * this.funFacts.length);
      this.myLog('display fun fact nr '+randomNr,2)
      this.funFact = this.funFacts[randomNr];
    }
  }

  private finishTry() {
    this.myLog('method finishTry',1);
    /* 
      1. Zeit in Array speichern
      2. Zeitentabelle aktualisieren
      3. Bestzeit aktualisieren
    */
    
    this.addTimeToResults();
    this.refreshBestTime();
    this.storeAllValues();
  }

  private addTimeToResults(replace: boolean = false) {
    this.myLog('method addTimeToResults',1);
    if (replace) this.userObject.listTimes.pop();
    this.userObject.listTimes.push({
      timeStamp: this.startTime + this.elapsedTime,
      tryTime: this.elapsedTime
    });
    this.myLog('user.listTimes after: '+JSON.stringify(this.userObject.listTimes),2);
  }

  private refreshBestTime() {
    this.myLog('refreshBestTime',1);
    
    if (this.userObject.bestTime == '00:00,00' || this.myFormat.formateTime(this.elapsedTime) < this.userObject.bestTime) {
      this.bestTime = this.myFormat.formateTime(this.elapsedTime);
    }
    this.userObject.bestTime = this.bestTime;
  }

  private storeAllValues() {
    this.myLog('method storeAllValues: ',1);
    this.userObject.changedTimes = true;
    localStorage.setItem(this.actualUser,JSON.stringify(this.userObject));
  }
  
  public tryPlusTwo() {
    if (!this.plus2) {
      this.elapsedTime = this.elapsedTime + 2000;
      this.plus2 = true;
    } else {
      this.elapsedTime = this.elapsedTime - 2000;
      this.plus2 = false;
    }
    this.addTimeToResults(true);
    this.refreshBestTime();
    this.storeAllValues();
    this.currentTimeDisplay = this.myFormat.formateTime(this.elapsedTime);
  }

  public tryDelete() {
    this.myLog('method tryDelete',1);
    this.userObject.listTimes.pop();
    this.refreshBestTime();
    this.storeAllValues();
    this.currentTimeDisplay = '00:00.00';
    this.finishedTry = false;
  }

  private myLog(consoleText: string, level: number) {    
    if (this.logLevel >= level) {
      console.log('timer: '+consoleText);
    }
    return;
  }
  
  private getFunfacts(lang: string = 'en') {
    switch(lang) { 
      case 'de': { 
        return [ 
          "Die Gotteszahl (God's Number) ist die kleinste Zahl an Rotationen, welche es braucht um einen 3x3x3 Rubik's Cube aus einer beliebigen Zufallsposition zu lösen. Seit Juli 2010 wissen wir, dass diese Zahl 20 beträgt.",
          "Man schätzt, dass weniger als 5.8% der Weltbevölkerung einen Rubik's Cube lösen kann.",
          "Statistiken zeigen, dass 1 von 20 Menschen, die einen Rubik's Cube besitzen, diese auch lösen können.",
          "1974 hat ein junger Architekturprofessor in Budapest ein anscheinend unmögliches Objekt geschaffen.",
          "Der erste Magic Cube (wie er zuerst genannt wurde) wurde 1975 in a Budapest verkauft.",
          "Das Rätsel setzt sich aus 26 Mini-Würfeln zusammen, die 'cubies' or 'cubelets' genannt werden.",
          "Der Magic Cube wurde 1980 in Rubik's Cube unbenannt.",
          "Der Rubik's Cube gewannt den Preis «Toy of the Year» 1980 und 1981.",
          "Über 350 Millionen Rubik’s Cubes wurden weltweit verkauft – er ist somit das bestverkaufte Spielzeug der Welt.",
          "Ein Rubik's Cube hat 43,252,003,274,489,856,000 verschiedene Stellungen.",
          "Mit sechs farbigen Seiten, 21 Teilen and 54 äusseren Oberflächen, gibt es über 43 QUINTILLIOIN mögliche Stellungen.",
          "Wird ein Rubik's Cube einmal pro Sekunde gedreht, so braucht es 1400 TRILLIONEN JAHRE bis alle Stellungen einmal erreicht wurden.",
          "Die besten Speed Cubers lösen den Cube durchschnittlich unter 6 Sekunden.",
          "Der aktuelle Weltrekordhalter is Yusheng Du aus China. Er löste den Rubik's Cube an den Wuhu Open 2018 in 3.47 Sekunden.",
          "Für einige Speed Cubers ist Stil wichtiger als Geschwindigkeit.",
          "Ein dreijähriges Kind aus China löste den Rubik's Cube unter 2 Minuten.",
          "Legos & smartphone lösen den Rubik's cube schneller als Menschen (Stand Mai 2020 in 1.2 Sekunden).",
          "IN einem 2012 erschienenen Interview mit CNN hat Rubik zugegeben, dass er über einen Monat gebraucht hatte, den ersten Cube zu lösen.",
          "Der 12-jährige Patrick Bossert schrieb 1981 das Buch «You Can Do the Cube» und landete damit auf der New York Times Bestseller Liste.",
          "Von der Serie «Rubik, the Amazing Cube» wurden 1983 Samstagmorgens jeweils 13 folgen ausgestrahlt. Der Würfel bekam Beine, Gesicht und magische Fähigkeiten.",
          "Zum 15-jährigen Jubiläum 1995, hat die Firma Diamond Cutters International einen voll funktionalen Rubik’s Cube aus 185 Karat Diamanten gebaut.",
          "Als der Kubismus in der Kunstszene bereits bekannt war, entstand mit dem Rubik's Cube eine neue Stilrichtung: der Rubik’s Kubismus.",
          "2006 erlebte der Rubik's Cube einen Boom, als er in «The Pursuit of Happyness» von Will Smith's gelöst wurde.",
          "2003 sprang der Cube-Enthusiast Dan Knights aus einem Flugzeug und löste den Würfel in 45 seconds freiem Fall bevor sich der Fallschirm öffnete.",
          "Jakub Kipa kann den Cube in 20.57 Sekunden lösen - nur mit seinen Füssen.",
          "Echte Cuber wissen, dass ein Speed Cube regelmässig geölt werden muss.",
          "Der Erfinder des Rubik's Cube war ein Architekturprofessor, der die Idee der dreidimensionalen Geometrie aufzeigen wollte",
          "Die erste Weltmeisterschaft wurde 1982 in Budapest ausgetragen. Der Gewinner Minh Thai aus den USA löste den Cube in heute sehr langsamen 22.95s.",
          "Über 100 kg schwer und 1.56 Meter gross ist der weltgrösste Rubik’s Cube von Tony Fisher.",
          "Der kleinste Cube is nur gerade 6 mm gross.",
          "Die «World Cube Association» ist eine non-profit Organisation, die Wettkämpfe austrägt für den Rubik's Cube und andere mechanische Rätsel, weltweit seit 2004.",
          "Obwohl Rubik's einen eigenen Speedcube anbietet, meiden echte Speed Cubers den Originalbrand wegen mangelnder Qualität",
          "Ein 22x22x22 Rubik's Cube ist das weltweit grösste Drehrätsel. Es wurde 2016 fertiggestellt und besteht aus 2691 Teilen, alle erstellt mit einem handelsüblichen 3D-Drucker."
        ];
        break; 
      } 
      default: { 
        return [
          "God's Number shows the smallest number of moves needed to solve the 3x3x3 Rubik's Cube from any random starting position. Since July of 2010 we know that this number is 20, so every position can be solved in twenty moves or less.",
          "It's estimated that less than 5.8% of the world's population can solve the Rubik's Cube.",
          "Statistics show that 1 in 20 people who own a Rubik's Cube can solve a Rubik's Cube.",
          "In 1974, a young professor of architecture in Budapest created the apparently impossible object.",
          "The first Magic Cube (as it was originally known) was sold in a Budapest toy shop in 1975.",
          "The puzzle is made up of twenty-six miniature cubes, known as 'cubies' or 'cubelets'",
          "The Magic Cube was renamed Rubik's Cube in 1980.",
          "The Rubik's Cube won Toy of the Year in 1980 and 1981.",
          "Over 350 million Rubik’s Cubes have been sold worldwide – making it the bestselling toy of all time.",
          "A Rubik's Cube has 43,252,003,274,489,856,000 possible configurations.",
          "With six coloured sides, 21 pieces and 54 outer surfaces, there's a combined total of over 43 QUINTILLIOIN different possible configurations.",
          "If you turned Rubik's Cube once every second it would take you 1400 TRILLION YEARS to finish to go through all the configurations.",
          "The best speed cubers can solve the cube in average under six seconds.",
          "The current world record holder is Yusheng Du from China. He completed the puzzle at the Wuhu Open 2018 in 3.47 seconds.",
          "Some speed-cubers go for style points over raw speed.",
          "A three-year-old in China solved the puzzle in under two minutes.",
          "Legos & smartphone solve Rubik's cube faster than human record.",
          "In a 2012 interview with CNN, Rubik admitted it took him more than a month to solve the Cube when he first invented it.",
          "12-year-old Patrick Bossert, who authored a book, You Can Do the Cube, in 1981 and wound up on the New York Times bestsellers list.",
          "Rubik, the Amazing Cube aired 13 episodes on Saturday mornings in 1983. The puzzle was given legs, a face, and magical abilities.",
          "For the puzzle’s 15th anniversary in 1995, Diamond Cutters International created a fully-functional Rubik’s Cube made out of 185 carats of diamonds.",
          "With Cubism already installed in art circles, the arrival of Rubik’s Cube led to a variation: Rubik’s Cubism.",
          "In 2006, sales experienced an uptick after the puzzle was featured in The Pursuit of Happyness: Will Smith's character is seen solving it.",
          "In 2003, the Cube enthusiast Dan Knights jumped from a plane at 12,000 feet, giving him roughly 45 seconds of free fall time to solve the Cube before his parachute would have to be opened.",
          "Jakub Kipa can solve it in 20.57 seconds using only his feet.",
          "Serious Cubers know that a Rubik’s Cube that hasn’t been properly maintained is going to hamper their efforts.",
          "The person responsible for the construction of the Rubik’s Cube is a professor of architecture, who was trying to conceive the idea of three-dimensional geometry.",
          "The first World Championship was held in Budapest in 1982 and the first winner was far too slow for today’s braggers; 22.95 seconds for Minh Thai from the United States.",
          "Weighing about 100 kg and being 1.56 meters tall, the largest Rubik’s Cube in the world is made by Tony Fisher.",
          "The smallest Cube is just 6 mm for the moment and people are trying to shrink it even more.",
          "The World Cube Association is a non-profit organisation that regulates and holds competitions for the Rubik's Cube and other mechanical twisty puzzles all over the World since 2004.",
          "Even though Rubik's has its own speedcube, competitive speedcubers still don't really use Rubik's branded cubes because they don't have the best quality.",
          "A 22x22x22 Rubik's Cube became the world's highest order twisty puzzle, created by corenpuzzle. It was completed in mid-January 2016 and it contains 2691 functioning parts made with a consumer 3D printer."
        ] 
        break; 
      } 
   } 
  }
}

