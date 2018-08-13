import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor( private navController:NavController){

  }

  /**
   * 打开一个新的页面
   */
  goNewPage():void{
      // this.navController.goForward('/tabs/(contact:contact)',true);

      this.navController.goForward('/test',true);
  }
}
