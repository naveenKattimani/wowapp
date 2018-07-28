
import { Injectable } from '@angular/core';

/*
  Generated class for the CartServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartServiceProvider {
  thecart: any[]=[];
  constructor() {
    console.log('Hello CartServiceProvider Provider');
    
  }

  getcart()
  {
    
    return Promise.resolve(this.thecart);
  }

  additem(myitem)
  {
    this.thecart.push(myitem);
    console.log (this.thecart);
  }

  removeitem(id,price)
  {
    let tmpID=`${id}-${price}`;
    let tmp=this.thecart.map(x=>x.orderID).indexOf(tmpID);
    if (tmp>-1)
    {
      this.thecart.splice(tmp,1);
    }

  }
}
