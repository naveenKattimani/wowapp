import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CartServiceProvider } from '../../providers/cart-service/cart-service';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  items=this.cartSvc.thecart;
  constructor(public navCtrl: NavController,public cartSvc:CartServiceProvider) {
  }
}
