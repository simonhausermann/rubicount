import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Plugins } from '@capacitor/core';
const { Device } = Plugins;

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

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

  constructor(private translate: TranslateService) {
    this.actualUser = localStorage.getItem('actualUser');
    this.userObject = JSON.parse(localStorage.getItem(this.actualUser));
    this.userList = JSON.parse(localStorage.getItem('userList'));
    
    if (!this.userObject || !this.userObject.hasOwnProperty('userName')) {
      this.userObject = { 
        userName: 'User 1',
        bestTime: '59:59.99',
        listTimes: [],
        language: 'en',
        sound: true,
        darkmode: false,
        changedTimes: true
      }
      Device.getLanguageCode().then(lang => {
        let langAr = lang.value.split('-');
        let deviceLang = langAr[0];
        if (this.translate.langs.find(element => element == deviceLang)) {
          this.userObject.language = deviceLang;
        } 
        this.actualUser = this.userObject.userName;
        this.userList.push({ userName: this.actualUser, language: this.userObject.language });

        localStorage.setItem('actualUser',this.actualUser);
        localStorage.setItem(this.actualUser,JSON.stringify(this.userObject));
        localStorage.setItem('userList',JSON.stringify(this.userList));
      }); 
    }
    if (!this.userObject.hasOwnProperty('language')) {
      this.userObject.language = 'en';
      localStorage.setItem(this.actualUser,JSON.stringify(this.userObject));
    }
    this.language = this.userObject.language;
    this.translate.use(this.userObject.language);
  }

}
