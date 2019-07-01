import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { RoleGuardService } from '../shared/guards/role-guard.service';
import { REFERENCER_ROLE } from '../shared/constant/app.constants';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [RoleGuardService], data: { expectedRole: REFERENCER_ROLE } },
  { path: '**', redirectTo: '/error/404' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ReferrerRoutingModule { }
