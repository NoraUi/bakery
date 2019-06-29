import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneClickOnlyButtonDirective } from './directives/one-click-only-button/one-click-only-button.directive';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [OneClickOnlyButtonDirective, MenuComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
