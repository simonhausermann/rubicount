import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
//import { StatusBar } from '@ionic-native/status-bar/ngx';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  constructor(
    private platform: Platform,
    /*private statusBar: StatusBar,*/
    public translate: TranslateService
  ) {
    this.initializeApp();
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //this.statusBar.styleDefault();
    });
  }
}
