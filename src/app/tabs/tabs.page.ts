import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


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
    
    if (!this.userObject.language) {
      this.userObject.language = 'en';
    }
    this.language = this.userObject.language;
    this.translate.use(this.userObject.language);

  }

}
