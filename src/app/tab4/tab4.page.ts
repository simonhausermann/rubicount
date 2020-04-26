import { Component } from '@angular/core';
import { isArray, isObject } from 'util';
import { AlertController } from '@ionic/angular';
import { TextAst } from '@angular/compiler';

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
  public userList: { userName: string }[] = [];
  // End localStorage variables

  private sound: boolean;
  private darkmode: boolean;

  constructor(private alertCtrl: AlertController) {}

  ngOnInit() {
    this.myLog('method ngOnInit',1);

    this.actualUser = localStorage.getItem('actualUser');
    this.userObject = JSON.parse(localStorage.getItem(this.actualUser));
    
    this.sound = this.userObject.sound;
    this.darkmode = this.userObject.darkmode;

    let tmpList = JSON.parse(localStorage.getItem('userList'));
    if (!isArray(tmpList)) {
      this.createNewUserlist();
    } else {
      this.userList = tmpList;
    }
  }

  private createNewUserlist() {
    this.userList = [];
    this.userList.push({userName: 'User 1'});
    this.setNewUserObject('User 1');
    this.saveUser();
    localStorage.setItem('userList',JSON.stringify(this.userList));
  }

  private setNewUserObject(userName): void {
    this.myLog('setNewUserObject: create userObject for user '+userName,1)
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
    this.createNewUserlist();
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
    let userNameCheck = false;
    let i = 0;
    while (!userNameCheck) {
      ++i;
      userNameCheck = this.checkUniqueUsername('User '+i);
      
    }
    this.userList.push({userName: 'User '+i});
    this.setNewUserObject('User '+i);
    this.saveUser();
    localStorage.setItem('userList',JSON.stringify(this.userList));
  }

  private checkUniqueUsername(userName: string): boolean {
    this.myLog('method checkUniqueUsername',1); 
    let check = true;
    this.userList.forEach(function (item) {
      console.log('compare '+item.userName+' with '+userName);
      if (item.userName == userName) {
        check = false;
      }
    });
    return check;
  }

  async changeUserName() {
    this.myLog('method changeUserName',1);

    const prompt = await this.alertCtrl.create({
      header: 'Change username',
      message: "Enter new username",
      inputs: [
        {
          name: 'username',
          type: 'text',
          placeholder: 'Superman'
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
            if (this.checkUniqueUsername(data.username)) {
              this.changeName(data.username);
            }
            else {
              alert('Username already taken');
            }
          }
        }
      ]
    });
    await prompt.present();
  }

  private changeName(newName) {
    this.myLog('methode changeName to '+newName,1);
    // update userlist
    let tmpAr = [];
    let actualUser = this.actualUser;
    this.userList.forEach(function (item) {
      if (item.userName != actualUser) {
        tmpAr.push(item);
      }
    });
    tmpAr.push({userName: newName});
    this.userList = tmpAr;
    localStorage.setItem('userList',JSON.stringify(this.userList));
    
    localStorage.setItem(newName,localStorage.getItem(this.actualUser));
    localStorage.removeItem(this.actualUser);
    this.actualUser = newName;
    localStorage.setItem('actualUser',this.actualUser);

    
  }

  public deleteUser(deleteName) {
    this.myLog('method deleteUser',1);
    let tmpAr = [];
    this.userList.forEach(function (item) {
      if (item.userName != deleteName) {
        tmpAr.push(item);
      }
    });
    
    this.userList = tmpAr;
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
