import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ReferencerRoutingModule } from './referencer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { BakeryComponent } from './bakery/bakery.component';

@NgModule({
  declarations: [HomeComponent, BakeryComponent],
  imports: [
    SharedModule,
    ReferencerRoutingModule,
    LeafletModule
  ]
})
export class ReferencerModule { }
