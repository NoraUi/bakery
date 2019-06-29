import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin/admin.component';
import { UserFormComponent } from './user-form/user-form/user-form.component';

@NgModule({
  declarations: [AdminComponent, UserFormComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
