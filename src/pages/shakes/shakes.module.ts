import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShakesPage } from './shakes';

@NgModule({
  declarations: [
    ShakesPage,
  ],
  imports: [
    IonicPageModule.forChild(ShakesPage),
  ],
})
export class ShakesPageModule {}
