import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the BurgerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-burger',
  templateUrl: 'burger.html',
})
export class BurgerPage {
  qty: any;
  itemsInCart: Object[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items.forEach(item => { item.quantity = 0; })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BurgerPage');
  }

  items = [
    {title:'burger1',cost:"25",quantity:0},
    {title:'burger2',cost:"35",quantity:0},
    {title:'burger2',cost:"35",quantity:0},
    {title:'burger2',cost:"35",quantity:0},
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  
    incrementQty(item: any) {
      item.quantity++;
      this.itemsInCart.push(item);
      console.log("******" + this.itemsInCart);
    }
  
    decrementQty(item: any) {
      if(item.quantity > 0) {
        item.quantity--;
      }
  }

}
