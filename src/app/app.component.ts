import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,
    private nativeStorage: NativeStorage,
    private navctrl: NavController
  ) {
    this.initializeApp();
  }

  // App初始化启动
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initWelcome();
      this.initScreenOrientation();
    });
  }

  // 启屏页
  initWelcome() {
    this.nativeStorage.getItem('firstLogin').then(
      data => {
        console.log(data);
      }, error => {
        // 没有获取到对应key的value，会报异常error
        console.log(error);
        this.nativeStorage.setItem('firstLogin', {
          status: true
        })
        this.navctrl.goRoot('welcome');
      }
    )
  }

  // 客户端竖屏、横屏功能
  initScreenOrientation() {
    // get current
    console.log(this.screenOrientation.type);
    // set orientation,可选的值有：default，landscape(横屏)，portrait(竖屏)
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    // allow user rotate
    // this.screenOrientation.unlock();
    // detect orientation changes
    // this.screenOrientation.onChange().subscribe(
    //   () => {
    //     console.log("Orientation Changed");
    //   }
    // );
  }
}
