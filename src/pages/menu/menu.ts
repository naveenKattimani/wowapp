import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BurgerPage } from '../burger/burger';
import { ShakesPage } from '../shakes/shakes';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  private rootPage;
  private burger;
  private shakes;

  constructor(public navCtrl: NavController,public navParams: NavParams) {

    this.rootPage = MenuPage;
    this.burger = BurgerPage;
    this.shakes = ShakesPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  openPage(p) {
    this.navCtrl.push(p);
  }

}
