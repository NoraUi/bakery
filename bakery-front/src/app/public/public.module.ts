import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { Popup1Component } from './home/popup1.component';
import { Popup2Component } from './home/popup2.component';
import { Popup3Component } from './home/popup3.component';

@NgModule({
  declarations: [
    HomeComponent,
    Popup1Component,
    Popup2Component,
    Popup3Component
  ],
  imports: [
    SharedModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
