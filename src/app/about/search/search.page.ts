import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(public navController:NavController,public modalCtrl:ModalController){}

  ngOnInit() {

  }

  autoFoucs(){
    return true;
  }

  goBack(){
    this.navController.goBack('/search');
    // this.modalCtrl.dismiss();
  }

}
