import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
