import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Main page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  constructor(public navCtrl: NavController) {
//

  }

  ionViewDidLoad() {
    console.log('Hello MainPage Page');
  }

  goToHealthScreen(){

      this.navCtrl.push(TabsPage);

  }

}
