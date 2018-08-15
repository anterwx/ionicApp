import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nativeStorage: NativeStorage,
    private navctrl:NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initWelcome();
    });
  }

  initWelcome() {
    this.nativeStorage.getItem('firstLogin').then(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
        this.nativeStorage.setItem('firstLogin',{
          status:true
        })
        this.navctrl.goRoot('welcome');
      }
    )
  }
}
