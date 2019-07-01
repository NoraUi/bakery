import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ReferencerRoutingModule } from './referencer-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    ReferencerRoutingModule
  ]
})
export class ReferrerModule { }
