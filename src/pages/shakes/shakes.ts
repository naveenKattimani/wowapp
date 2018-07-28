import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShakesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shakes',
  templateUrl: 'shakes.html',
})
export class ShakesPage {
  qty: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items.forEach(item => { item.quantity = 0; })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BurgerPage');
  }

  items = [
    {title:'Shakes1',cost:"25",quantity:0},
    {title:'Shakes2',cost:"35",quantity:0},
    {title:'Shakes3',cost:"35",quantity:0},
    {title:'Shakes4',cost:"35",quantity:0},
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  
    incrementQty(item: any) {
      item.quantity++;
    }
  
    decrementQty(item: any) {
      if(item.quantity > 0) {
        item.quantity--;
      }
  }

}
