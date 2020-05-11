import { Component } from '@angular/core';
import { isArray, isObject } from 'util';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

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
    language: string,
    sound: boolean,
    darkmode: boolean,
    changedTimes: boolean
  };
  public actualUser: string;
  public userList: { userName: string, language: string }[] = [];
  // End localStorage variables

  public sound: boolean;
  public darkmode: boolean;
  public language: string;

  constructor(
    private alertCtrl: AlertController,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.myLog('method ngOnInit',1);

    this.actualUser = localStorage.getItem('actualUser');
    this.userObject = JSON.parse(localStorage.getItem(this.actualUser));
    
    this.sound = this.userObject.sound;
    this.darkmode = this.userObject.darkmode;
    
    if (!this.userObject.language) {
      this.userObject.language = 'en';
      this.saveUser();
    }
    this.language = this.userObject.language;
    this.translate.use(this.userObject.language);

    let tmpList = JSON.parse(localStorage.getItem('userList'));
    if (!isArray(tmpList)) {
      this.createNewUserlist();
    } else {
      this.userList = tmpList;
    }

    for (let i=0; i<this.userList.length; i++) {
      if (!this.userList[i].language) this.userList[i].language = 'en';
    }

    this.myLog(JSON.stringify(this.userList),2);
  }

  private createNewUserlist() {
    this.myLog('method createNewUserList',1);
    this.userList = [];
    this.userList.push({userName: 'User 1', language: 'en'});
    this.setNewUserObject('User 1');
    this.saveUser();
    this.myLog('set userList '+JSON.stringify(this.userList),2);
    localStorage.setItem('userList',JSON.stringify(this.userList));
  }

  private setNewUserObject(userName): void {
    this.myLog('setNewUserObject: create userObject for user '+userName,1)
    this.userObject = { 
      userName: userName,
      bestTime: '59:59.99',
      listTimes: [],
      language: 'en',
      sound: true,
      darkmode: false,
      changedTimes: true
    }
  }

  public languageChange(event) {
    this.myLog('event: '+JSON.stringify(event),2);
    this.userObject.language = this.language;
    this.saveUser();
  }

  async clearUserHistory() {
    this.myLog('method clearUserHistory',1);
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Do you really want to delete all times of user '+this.actualUser,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // cancel
          }
        }, {
          text: 'Delete',
          handler: () => {
            this.userObject.listTimes = [];
            this.saveUser();
          }
        }
      ]
    });
    await alert.present();
  }

  public clearLocalStorage() {
    this.myLog('method clearLocalStorage',1);

    localStorage.clear();
    this.actualUser = 'User 1';
    localStorage.setItem('actualUser',this.actualUser);
    this.createNewUserlist();
    this.saveUser();
  }

  public updateSettings() {
    this.sound = this.userObject.sound;
    this.darkmode = this.userObject.darkmode;
    this.language = this.userObject.language;
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
    this.actualUser = 'User '+i;
    this.userList.push({ userName: this.actualUser, language: this.userObject.language});
    this.setNewUserObject(this.actualUser);
    this.saveUser();
    localStorage.setItem('userList',JSON.stringify(this.userList));
  }

  private checkUniqueUsername(userName: string): boolean {
    this.myLog('method checkUniqueUsername',1); 
    let check = true;
    this.userList.forEach(function (item) {
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
    tmpAr.push({ userName: newName, language: this.userObject.language });
    this.userList = tmpAr;
    localStorage.setItem('userList',JSON.stringify(this.userList));
    
    localStorage.setItem(newName,localStorage.getItem(this.actualUser));
    localStorage.removeItem(this.actualUser);
    this.actualUser = newName;
    localStorage.setItem('actualUser',this.actualUser);

    
  }

  async deleteUser(deleteName) {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Do you really want to delete user '+deleteName,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // cancel
          }
        }, {
          text: 'Delete',
          handler: () => {
            this.reallyDeleteUser(deleteName);
          }
        }
      ]
    });

    await alert.present();
  }

  public reallyDeleteUser(deleteName) {
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
    this.userObject.language = this.language;
    localStorage.setItem(this.actualUser,JSON.stringify(this.userObject));
  }

  private myLog(consoleText: string, level: number) {
    if (this.logLevel >= level) {
      console.log('settings: '+consoleText);
    }
    return;
  }

}
