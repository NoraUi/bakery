import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoleGuardService } from '../shared/guards/role-guard.service';
import { REFERENCER_ROLE } from '../shared/constant/app.constants';
import { AuthGuardService } from '../shared/guards/auth-guard.service';
import { BakeryComponent } from './bakery/bakery.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService, RoleGuardService], data: { expectedRole: REFERENCER_ROLE } },
  { path: 'bakery',
    component: BakeryComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRoles: [REFERENCER_ROLE]
    }
  },
  { path: 'bakery/:id',
    component: BakeryComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRoles: [REFERENCER_ROLE]
    }
  },
  { path: '**', redirectTo: '/error/404' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferencerRoutingModule { }
