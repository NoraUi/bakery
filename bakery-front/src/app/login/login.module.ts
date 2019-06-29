import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ChangePasswordComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
