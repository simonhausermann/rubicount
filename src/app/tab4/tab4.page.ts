import { Component } from '@angular/core';
import { isArray, isObject } from 'util';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

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
  private userListAr: Array<string> = [];
  // End localStorage variables

  private sound: boolean;
  private darkmode: boolean;

  public userList: { userName: string, userArray: Array<any> }[] = [
    { userName: 'User 1', userArray: [] },
    { userName: 'User 2', userArray: [] }
  ];

  constructor() {}

  ngOnInit() {
    this.myLog('method ngOnInit',1);

    this.actualUser = localStorage.getItem('actualUser');
    this.userObject = JSON.parse(localStorage.getItem(this.actualUser));
    
    this.sound = this.userObject.sound;
    this.darkmode = this.userObject.darkmode;
  }

  private setNewUserObject(userName): void {
    this.userObject = { 
      userName: userName,
      bestTime: '59:59.99',
      listTimes: [],
      sound: true,
      darkmode: false,
      changedTimes: true
    }
  }

  public clearUserHistory() {
    this.myLog('method clearUserHistory',1);

    let listTimes: Array<Object> = [{}];
    this.setNewUserObject(this.actualUser);
    this.saveUser();
  }

  public clearLocalStorage() {
    this.myLog('method clearLocalStorage',1);

    this.actualUser = 'User 1';
    this.setNewUserObject('User 1');

    localStorage.clear();
    this.saveUser();
  }

  public updateUser() {
    this.userObject.sound = this.sound;
    this.userObject.darkmode = this.darkmode;
    this.saveUser();
  }

  public updateSettings() {
    this.sound = this.userObject.sound;
    this.darkmode = this.userObject.darkmode;
  }

  public selectUser(userName) {
    this.myLog('method selectUser',1);

    this.actualUser = userName;
    localStorage.setItem('actualUser',this.actualUser);
    this.userObject = JSON.parse(localStorage.getItem(this.actualUser));

    if (!isObject(this.userObject))
    {
      this.myLog('no listTimes, create userObject',2);
      this.clearUserHistory();
    }
    this.updateSettings();
  }

  public addUser() {
    this.myLog('method addUser',1);

  } 

  public deleteUser() {
    this.myLog('method deleteUser',1);

  }

  private saveUser() {
    this.myLog('method saveUser',1);
    localStorage.setItem(this.actualUser,JSON.stringify(this.userObject));
  }

  private myLog(consoleText: string, level: number) {
    if (this.logLevel >= level) {
      console.log('settings: '+consoleText);
    }
    return;
  }
}
