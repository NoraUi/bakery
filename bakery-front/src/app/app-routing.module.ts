import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HomeRedirectGuardService } from './shared/guards/home-redirect-guard.service';
import { SharedModule } from './shared/shared.module';

export const routes: Routes = [
  { path: '', redirectTo: '/account/login', pathMatch: 'full' },
  { path: 'home', children: [], pathMatch: 'full', canActivate: [HomeRedirectGuardService] },
  { path: 'account', loadChildren: './login/login.module#LoginModule'},
  { path: 'referencer', loadChildren: './referencer/referencer.module#ReferencerModule', pathMatch: 'prefix'},
  { path: 'contributor', loadChildren: './contributor/contributor.module#ContributorModule', pathMatch: 'prefix'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', pathMatch: 'full'},
  { path: 'error', loadChildren: './error/error.module#ErrorModule', pathMatch: 'prefix'},
  { path: '**', redirectTo: 'error/404'}
];

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
