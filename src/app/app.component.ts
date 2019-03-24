import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  // Here create a table with all the items we want in the list of our left menu

  public appPage = [
    {
      title: 'CV',
      url: '',
      icon: 'image'
    },
    {
      title: 'About',
      url: '/tabs/tab2',
      icon: 'help-circle-outline'
    },
    {
      title: 'Contact',
      url: '/tabs/tab3',
      icon: 'send'
    },
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
