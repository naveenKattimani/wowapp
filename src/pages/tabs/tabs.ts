import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { MenuPage } from '../menu/menu';
import { CartPage } from '../cart/cart';
import { ProfilePage } from '../profile/profile';

@Component({
  selector:'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MenuPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = CartPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
