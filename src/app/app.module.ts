import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CartPage } from '../pages/cart/cart';
import { ProfilePage } from '../pages/profile/profile';
import { MenuPage } from '../pages/menu/menu';
import { BurgerPage } from '../pages/burger/burger';
import { ShakesPage } from '../pages/shakes/shakes';
import { CartServiceProvider } from '../providers/cart-service/cart-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    MenuPage,
    CartPage,
    ProfilePage,
    BurgerPage,
    ShakesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    MenuPage,
    CartPage,
    ProfilePage,
    BurgerPage,
    ShakesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CartServiceProvider
  ]
})
export class AppModule {}
