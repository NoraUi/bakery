import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { RoleGuardService } from '../shared/guards/role-guard.service';
import { CONTRIBUTOR_ROLE } from '../shared/constant/app.constants';
import { AuthGuardService } from '../shared/guards/auth-guard.service';
import { Popup1Component } from './home/popup1.component';
import { Popup2Component } from './home/popup2.component';
import { Popup3Component } from './home/popup3.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'popup1', component: Popup1Component },
  { path: 'popup2', component: Popup2Component },
  { path: 'popup3', component: Popup3Component },
  { path: '**', redirectTo: '/error/404' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
