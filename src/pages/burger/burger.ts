import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartServiceProvider } from '../../providers/cart-service/cart-service';
@IonicPage()
@Component({
  selector: 'page-burger',
  templateUrl: 'burger.html',
})
export class BurgerPage {
  qty: any;
  itemsInCart: Object[] = [];

  constructor(public navCtrl: NavController,  public navParams: NavParams, public cartSvc:CartServiceProvider) {
    this.items.forEach(item => { item.quantity = 0; });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BurgerPage');
  }

  items = [
    {title:'burger1',cost:"25",quantity:0,orderID:'101'},
    {title:'burger2',cost:"35",quantity:0,orderID:'102'},
    {title:'burger2',cost:"35",quantity:0,orderID:'103'},
    {title:'burger2',cost:"35",quantity:0,orderID:'104'},
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  
    incrementQty(item: any) {
      item.quantity++;
      this.cartSvc.additem(item);    
      
      // this.itemsInCart.push(item);
      // console.log("******" + this.itemsInCart);
    }
  
    decrementQty(item: any) {
      if(item.quantity > 0) {
        item.quantity--;
        this.cartSvc.removeitem(item,item.cost);
      }
  }

}
